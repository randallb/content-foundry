{
  inputs = {
    flake-utils.url = "github:numtide/flake-utils";
    nixpkgs.url = "nixpkgs/nixos-24.11";
    nixpkgs-unstable.url = "nixpkgs/nixos-unstable";
  };

  outputs = { self, nixpkgs, flake-utils, nixpkgs-unstable }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgsForSystem = nixpkgsSource:
          let
            filteredSrc = builtins.filterSource
              (path: type: baseName: ! (builtins.match ".*/\\.sl" baseName != null))
              ./.;

            nixpkgsEnv = import nixpkgsSource {
              inherit system filteredSrc;
              config.allowUnfree = true;
            };
          in
          nixpkgsEnv;

        pkgs = pkgsForSystem nixpkgs;
        unstablePkgs = pkgsForSystem nixpkgs-unstable;

        sharedPackages = with pkgs; [
          unstablePkgs.deno
        ];

        defaultPackages = with pkgs; [
        ];

        devShellPackages = with pkgs; [
          sapling
        ];

        deployPackages = with pkgs; [
        ];
      in
      rec {
        packages.default = pkgs.buildEnv {
          name = "defaultPackage";
          paths = sharedPackages ++ defaultPackages;
        };

        packages.deploy = pkgs.buildEnv {
          name = "deploy";
          paths = deployPackages ++ sharedPackages;
        };

        devShells.default = pkgs.mkShell {
          nativeBuildInputs = sharedPackages ++ devShellPackages ++ defaultPackages;
        };
      }
    );
}