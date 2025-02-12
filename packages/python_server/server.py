from fastapi import FastAPI
import strawberry
from strawberry.fastapi import GraphQLRouter
import sys
import platform
import os

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

# Create GraphQL router with GraphiQL interface
graphql_app = GraphQLRouter(
    schema,
    graphiql=True  # Enable GraphiQL interface
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
        port = int(os.environ.get("PYTHON_PORT", "3333"))
        uvicorn.run(app, host="0.0.0.0", port=port, log_level="info")
    except Exception as e:
        print(f"Failed to start server: {e}", file=sys.stderr)
        sys.exit(1)
