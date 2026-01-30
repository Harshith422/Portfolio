# 🧾 Legal Document Analyzer & Summarizer

> 🚧 **Note:** This project is currently under update.  
> 🔔 If you need urgent access or support, feel free to message me on [LinkedIn](https://www.linkedin.com/in/harshith-potnuri-144har/).

**An NLP-powered system to extract, classify, assess risk, and summarize clauses from legal documents using deep learning.**

---

## 📌 Overview

Legal documents like contracts are often complex and lengthy, making manual review time-consuming and error-prone. This project presents a comprehensive framework that uses **Natural Language Processing (NLP)** and **Deep Learning** to automate:

- Clause Extraction  
- Clause Classification  
- Risk Assessment  
- Summarization of high-risk clauses

---

## 🛠️ Features

- 📄 **Clause Extraction**: Tokenizes legal contracts into distinct clauses  
- 🧠 **Clause Classification**: Uses Word2Vec + KMeans and a BiLSTM-Attention model  
- ⚠️ **Risk Assessment**: Evaluates clauses using heuristic scoring and an LSTM-based neural classifier  
- ✂️ **Summarization**: Selects top risky clauses using cosine similarity  
- 📤 **Deployment**: Accepts .pdf/.txt contracts and returns clause-level risk summaries

---

## 🧠 Technologies Used

- Python  
- NLTK, SpaCy  
- Word2Vec (Gensim)  
- KMeans Clustering (scikit-learn)  
- BiLSTM + Attention (PyTorch)  
- CUAD v1 Dataset  
- Cosine Similarity for Summarization

---

## 🧪 Dataset

**Contract Understanding Atticus Dataset (CUAD v1)**  
- 510 real-world contracts  
- 13,000+ expert annotations across 41 clause types  
- Source: [CUAD Dataset](https://www.atticusprojectai.org/cuad)

---

## 🔁 Project Workflow

1. **Data Preprocessing**  
   - Parse `.txt` files from CUAD  
   - Tokenize into clauses using NLTK  
   - Save to `processed_clauses.csv`

2. **Clause Vectorization**  
   - Generate clause-level embeddings using Word2Vec  
   - Save to `embeddings.pkl`

3. **Clause Classification**  
   - Unsupervised: Cluster embeddings using KMeans (k=25)  
   - Supervised: Train BiLSTM + Attention on labeled data  
   - Save to `clause_type_classified.csv` and `clause_extraction_model.pth`

4. **Risk Assessment**  
   - Heuristic scoring based on keywords, negations, and length  
   - Train LSTM risk classifier  
   - Save to `risk_assessment_results.csv` and `risk_model.pth`

5. **Summarization**  
   - Compute cosine similarity among risky clauses  
   - Select top 5 most representative ones  
   - Present a condensed summary

6. **Deployment**  
   - Upload contract (PDF/TXT)  
   - System processes and displays summarized risk clauses to the user

---

## 📊 Results

- Clause Classification Accuracy: **87.3%** (BiLSTM-Attention)  
- Risk Prediction Accuracy: **91%**  
- Summarization: **96% reduction in clause review effort**

---
## 🚀 Future Improvements

- Integrate **BERT-based transformers** for better clause classification  
- Expand the risk classifier with **expert-annotated** risk scores  
- Create a **web interface** for real-time contract uploads and analysis

---

## 👨‍💻 Contributors

- Viswanadh Anna  
- Bhargav Ram Uppalapati  
- Sai Jaya Sucharan Gamidi  
- Harshith Potnuri  
- Sriramsai Bhogadi  

Supervised by **Dr. Sachin Kumar S**, Amrita Vishwa Vidyapeetham

---

## 📄 License

This project is for academic use only. Dataset from [CUAD](https://www.atticusprojectai.org/cuad) is under **Creative Commons Attribution 4.0**.
