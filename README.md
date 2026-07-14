# 🤖 Multi-Agent Research Assistant

An AI-powered full-stack research assistant that uses multiple intelligent agents to search the web, extract relevant information, generate comprehensive research reports, and provide AI-based feedback.

The application combines **React**, **FastAPI**, **LangChain**, **Mistral AI**, and **Tavily Search API** to automate the complete research workflow.

---

## 🚀 Features

- 🔍 AI-powered web search using Tavily Search API
- 📄 Intelligent webpage scraping for detailed information
- 🤖 Multi-agent architecture built with LangChain
- ✍️ Automatic research report generation
- ⭐ AI-based report evaluation and constructive feedback
- 🌐 Modern React frontend
- ⚡ FastAPI backend with REST APIs
- 🔐 Environment variable support for secure API key management

---

## 🛠️ Tech Stack

### Frontend

- React
- Vite
- Axios
- CSS

### Backend

- FastAPI
- Python
- LangChain
- Mistral AI
- Tavily Search API
- BeautifulSoup
- Requests
- Python-dotenv

---

## 📁 Project Structure

```text
multi-agent-system/
│
├── backend/
│   ├── agent.py
│   ├── pipeline.py
│   ├── tool.py
│   ├── main.py
│   ├── requirements.txt
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
├── README.md
└── .gitignore
```

---

## ⚙️ Installation

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/multi-agent-research-assistant.git

cd multi-agent-research-assistant
```

---

## Backend Setup

Navigate to the backend folder.

```bash
cd backend
```

Create a virtual environment.

```bash
python -m venv .venv
```

Activate the virtual environment.

### Windows

```bash
.venv\Scripts\activate
```

### Linux / macOS

```bash
source .venv/bin/activate
```

Install dependencies.

```bash
pip install -r requirements.txt
```

---

## Environment Variables

Create a `.env` file inside the `backend` folder.

```env
MISTRAL_API_KEY=your_mistral_api_key

TAVILY_API_KEY=your_tavily_api_key
```

---

## Run Backend

```bash
uvicorn main:app --reload
```

Backend will run on

```
http://127.0.0.1:8000
```

API Documentation

```
http://127.0.0.1:8000/docs
```

---

## Frontend Setup

Open another terminal.

```bash
cd frontend
```

Install dependencies.

```bash
npm install
```

Run the frontend.

```bash
npm run dev
```

Frontend runs on

```
http://localhost:5173
```

---

# 🧠 Multi-Agent Workflow

The system consists of four AI components:

### 🔎 Search Agent

- Searches the web using Tavily Search API.
- Retrieves reliable URLs and summaries.

### 📖 Reader Agent

- Selects the most relevant webpage.
- Extracts detailed content using BeautifulSoup.

### ✍️ Writer Chain

- Generates a structured research report.
- Produces:
  - Introduction
  - Key Findings
  - Conclusion
  - Sources

### ⭐ Critic Chain

- Evaluates the generated report.
- Provides:
  - Overall Score
  - Strengths
  - Areas of Improvement
  - Final Verdict

---

## 📸 Demo

> a demo video here.

https://drive.google.com/file/d/19CB4ZCEdcvlW4RYUxDPeIqTQ8D7FxSBb/view?usp=sharing

---

## Future Improvements

- User authentication
- PDF export
- Report history
- Dark mode
- Streaming AI responses
- Download reports
- Citation support
- Multi-language research
- Research history database

---


## ⭐ If you like this project

Give this repository a ⭐ on GitHub!
