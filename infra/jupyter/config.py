import os

c.ServerApp.ip = '0.0.0.0'
c.ServerApp.allow_origin = '*'
c.ServerApp.open_browser = False
c.ServerApp.token = 'bfjupyter'  # This will be the URL token
c.ServerApp.password = ''  # Disable password prompt when token is used
c.ServerApp.tornado_settings = {
    'headers': {
        'Content-Security-Policy': "frame-ancestors 'self' https://replit.com"
    }
}

path = "."
c.ServerApp.root_dir = path

# Use a fixed token for authentication
c.ServerApp.password = ""
c.ServerApp.password_required = False

# Optional: Fixed port and no retries
c.ServerApp.port = 8888
c.ServerApp.port_retries = 0