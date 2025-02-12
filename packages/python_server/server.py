from fastapi import FastAPI
import strawberry
from strawberry.fastapi import GraphQLRouter
import sys
import platform
import os
import logging

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Define GraphQL schema
@strawberry.type
class Query:
    @strawberry.field
    def hello(self) -> str:
        return "Hello from GraphQL!"

    @strawberry.field
    def python_info(self) -> str:
        return f"Python {sys.version} on {platform.platform()}"

# Create Strawberry schema
schema = strawberry.Schema(query=Query)

# Create FastAPI app
app = FastAPI()

# Create GraphQL router with GraphQL IDE interface
graphql_app = GraphQLRouter(
    schema,
    graphql_ide=True
)

# Add GraphQL routes to main app
app.include_router(graphql_app, prefix="/graphql")

@app.get("/")
async def get_python_version():
    return {
        "python_version": sys.version,
        "platform": platform.platform(),
        "implementation": platform.python_implementation()
    }

if __name__ == "__main__":
    try:
        import uvicorn
        port = int(os.environ.get("PORT", "3333"))
        logger.info(f"Starting Python server on port {port}")

        uvicorn.run(
            "server:app",
            host="0.0.0.0",
            port=port,
            log_level="info",
            reload=True
        )
    except Exception as e:
        logger.error(f"Failed to start server: {e}", file=sys.stderr)
        sys.exit(1)