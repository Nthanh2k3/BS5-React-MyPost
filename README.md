# My Post - Web Development Project (INT3306_22)

Welcome to the Logistic ReactJS App! This application is designed to streamline and optimize logistic operations, providing a user-friendly interface for managing and tracking shipments, orders, and inventory. Built with ReactJS, this app offers a modern and responsive solution for logistics management.

MyPost operates in the courier service industry. The company has service points that cover the entire country, with each service point responsible for a specific region. In addition to these service points, the company also has several goods consolidation points. Each service point collaborates with a consolidation point, and conversely, a consolidation point may work with multiple service points.

Senders with items to dispatch bring them to a service point, usually the nearest one, to send the package. The items are then transported to the consolidation point corresponding to the sender's service point and subsequently forwarded to the consolidation point associated with the recipient's service point. At the recipient's service point, the delivery personnel will ensure the package is handed over directly to the recipient.

# Member

-   Phạm Minh Quang - 21021532
-   Nguyễn Hải Nam - 21020110
-   Nguyễn Việt Thành - 21021543

# Table Of Contents

-   Features
-   Installation
-   Dependencies
-   Contribution

# Features

## Boss Roles :

-   System Management of Post Points and Warehouse Points
-   Management of Warehouse,Office Managers' Accounts:
-   Nationwide Shipment Statistics:

## Office Manager Roles :

-   Create Accounts for Office Staff
-   Shipment Statistics at Post Points:

## Office Staff Roles :

-   Recording orders from Customers
-   Creating Shipment Orders to Warehouse Points
-   Confirming Receipt from Warehouse Points
-   Creating Shipment Orders to Recipients
-   Confirming Delivery to Recipients
-   Confirming Undeliverable Items
-   Statistics on Successful and Unsuccessful Shipments

## Warehouse Manager Roles:

-   Create Account for Warehouse Staff
-   Shipment Statistics at Warehouse Points

## Warehouse Staff Roles:

-   Confirming Outgoing Shipments from Post Points
-   Creating Shipment Orders to Destination Warehouse Points
-   Confirming Incoming Shipments from Other Warehouse Points
-   Creating Shipment Orders to Destination Post Points

## Client Roles :

-   Tracking Shipment Status and Progress

# Installation

-   Clone the Repository
-   yarn start(on LocalHost)
-   Firebase deploy (on Hosting)
-   or directly on <https://mypost-ff389.web.app/>

# Dependencies

### Frontend:

-   ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
-   ![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white)
-   ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
-   ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
-   ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
-   ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
-   ![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)

### Backend:

-   ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
-   ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
-   ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
-   ![Firebase](https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white)

# Contribution

## Phạm Minh Quang

-   Bố cục web, phân loại và điều hướng router, gửi request tới backend(API service), login phân quyền, bảo vệ route(protected route).
-   Giao diện frontend: Các màn cho lãnh đạo, trưởng điểm tập kết, trưởng điểm giao dịch, nhân viên giao dịch, nhân viên tập kết, biểu đồ thống kê(Chart)

## Nguyễn Việt Thành

-   Giao diện frontend: Receipant, Header, Sidebar, Core Component, giao diện responsive
-   Tạo QRCode và xuất file pdf hóa đơn
-   Deploy frontend server

## Nguyễn Hải Nam

-   Thiết kế cơ sở dữ liệu
-   Deploy backend server
-   Backend API cho các actor: Office, Warehouse, Boss, Office Manager, WarehouseManager
