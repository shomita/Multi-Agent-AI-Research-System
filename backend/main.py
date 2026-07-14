from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from pipeline import run_research_pipeline

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class TopicRequest(BaseModel):
    topic: str


@app.post("/research")
def research(request: TopicRequest):

    result = run_research_pipeline(request.topic)

    return {
        "report": result["report"],
        "feedback": result["feedback"]
    }