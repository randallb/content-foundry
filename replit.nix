{ pkgs }: {
  deps = [
    pkgs.deno
    pkgs.unzip
    pkgs.jupyter
    pkgs.jq
    pkgs.sapling
    pkgs.gh
  ];
}