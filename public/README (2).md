# 🏥 Hospital Management System (HMS)

## **📌 Overview**
The **Hospital Management System (HMS)** is a role-based application that streamlines hospital operations such as **appointments, billing, patient management, and medical records.** The system supports **four user roles**:  

- **Patients** – Book, view, modify, or cancel appointments and access medical records.  
- **Doctors** – View appointments, check patient details, and generate medical reports.  
- **Managers** – Oversee hospital operations, manage doctors and staff, and view patient data.  
- **Receptionists** – Handle appointment scheduling and billing.  

---

## **🛠️ Technologies Used**
- **Backend:** Python (psycopg2 for PostgreSQL interaction)  
- **Database:** PostgreSQL  
- **Authentication:** Role-based login system  
- **Future Enhancements:** GUI (Tkinter/Flask), PDF billing, Notifications  

---

## **🔑 Features**
### **👤 Patients**
✔ Register & log in  
✔ Book, view, change, and cancel appointments  
✔ View medical reports after doctor consultation  

### **🩺 Doctors**
✔ View scheduled appointments  
✔ Check patient details by ID or name  
✔ Provide medical reports for completed appointments  

### **🛠️ Managers**
✔ View all appointments, patients, doctors, and staff  
✔ Add or remove doctors, nurses, and non-medical staff  
✔ Manage patient & doctor data  
✔ Oversee billing and payments  

### **📋 Receptionists**
✔ Generate and view patient bills  
✔ Update payment status (Paid/Pending/Unpaid)  
✔ Track unpaid and paid bills  

---

## **🗂️ Database Schema**
### **Tables**  
- **Patients** (patient_id, first_name, last_name, email, password, phone)  
- **Doctors** (doctor_id, first_name, last_name, email, specialty, experience)  
- **Appointments** (appointment_id, patient_id, doctor_id, appointment_date, status)  
- **Medical Records** (record_id, patient_id, doctor_id, diagnosis, prescription)  
- **Bills** (bill_id, appointment_id, total_amount, payment_status, payment_method, payment_date, receptionist_id)  
- **Receptionists** (receptionist_id, first_name, last_name, email, password)  
- **Managers** (manager_id, first_name, last_name, email, password)  

---

## **📌 Installation & Setup**
### **1️⃣ Install Dependencies**
```bash
pip install psycopg2-binary
pip install getpass
```

### **2️⃣ Setup PostgreSQL Database**
- Create a PostgreSQL database  
- Import the provided schema (`hms_schema.sql`)  

### **3️⃣ Run the Application**
```bash
python hms.py
```

---

## **👨‍💻 Usage**
1. **Run the program** and choose the user type (`Patient`, `Doctor`, `Manager`, `Receptionist`).  
2. **Login/Register** based on the role.  
3. **Navigate through the menu options** and perform actions like booking appointments, generating bills, or managing hospital data.  
4. **Exit** the system when done.  

---

## **🔮 Future Enhancements**
- ✅ **GUI-based interface (Tkinter or Flask)**  
- ✅ **Automated billing PDF generation**  
- ✅ **Email notifications for appointments & payments**  
- ✅ **Online payment gateway integration**  

---
