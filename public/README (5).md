# 🛰️ Multi-Class Land Cover Classification Using Hybrid Spectral-Spatial Deep Learning

A deep learning system for accurate and efficient **multi-label classification** of satellite imagery using both **RGB** and **spectral bands (NIR, SWIR)** from Sentinel-2 data, enhanced with **super-resolution**, **attention mechanisms**, and deployed via a **Gradio web interface**.

---

## 📌 Problem Statement

Traditional land cover classification struggles in complex environments where:

- Spatial detail is lost in low-res RGB images  
- Spectral information is underutilized  
- Multi-label scenes (e.g., multiple land types in one image) are common  

🔍 **Goal:** Design a hybrid system that intelligently combines **spatial (RGB)** and **spectral (NIR, SWIR)** features for accurate multi-label classification.

---

## 🎯 Objectives

- Enhance low-res RGB images using **ESRGAN**  
- Select key spectral bands using **PCA**  
- Fuse features from RGB and spectral images using **Multi-Stream CNN**  
- Focus on critical regions with an **Attention Mechanism**  
- Perform **multi-label classification** with high precision and recall  
- Deploy the system via a **Gradio app** for real-time predictions

---

## 🧠 Research Gap

- Existing models rarely use **both spatial and spectral** data  
- Most focus on **single-label** classification  
- **Attention mechanisms** are underused  
- **Super-resolution** is not widely adopted in satellite-based classification

---

## 📂 Dataset

**📡 Source:** [EuroSAT Dataset (Sentinel-2)](https://github.com/phelber/eurosat)

- `EuroSAT/`: RGB images (64x64)
- `EuroSATallBands/`: 13-band .tif spectral images
- Supporting files:  
  - `label_map.json`  
  - `train.csv`, `validation.csv`, `test.csv`  
- 10 Land Cover Classes:  
  `AnnualCrop`, `Forest`, `HerbaceousVegetation`, `Highway`, `Industrial`, `Pasture`, `PermanentCrop`, `Residential`, `River`, `SeaLake`

---

## 🧪 Methodology

### 🔧 Preprocessing

1. **ESRGAN Super-Resolution**
   - Upscale RGB images from `64x64` ➝ `256x256`
   - Improve spatial feature clarity

2. **PCA for Spectral Band Selection**
   - Reduce dimensionality from 13 bands  
   - Retain most informative features for learning

### 🧠 Model Architecture

- **Multi-Stream CNN**
  - Separate CNNs for RGB and spectral inputs
  - Extract spatial + spectral features
  - Fused for joint representation

- **Attention Layer**
  - Emphasizes most relevant spectral-spatial zones

- **Multi-Label Classification**
  - Sigmoid activation
  - Output top-2 land cover types per image

### 📊 Evaluation

- Metrics: `F1-Score`, `Precision`, `Recall`
- Deployment: Gradio-based web app

---

## 📈 Results

- ✅ **Validation Accuracy:** 95.44%  
- 🔁 **Training Accuracy:** 92.67%  
- 📉 **Loss:** Stable, low divergence between training and validation  
- 📊 **High F1-Scores:**  
  - Forest: **98.81%**  
  - SeaLake: **99.78%**  
  - Residential: **95.62%**  
- ❌ **Challenges:**  
  - Confusion: `PermanentCrop` ↔ `HerbaceousVegetation`  
  - Minor overlaps: `Highway` vs `Industrial`

---

## 🚀 Deployment

- Built with **Gradio**
- Upload a `.jpg` satellite image
- Receive top-2 land cover type predictions

---

## 🔮 Future Work

- Explore **transformer-based architectures** for better context learning  
- Add **temporal dimension** using time-series satellite data  
- Improve performance on **spectrally similar land types**

---

## 📄 License

This project is for academic use. EuroSAT dataset is publicly available under open data licenses.
