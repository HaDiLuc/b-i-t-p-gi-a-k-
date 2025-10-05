
document.addEventListener('DOMContentLoaded', function() {
    console.log("Website EliteCar đã tải hoàn tất!");
    
    const header = document.querySelector('.main-header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
        } else {
            header.style.backgroundColor = '#0d0d0d';
        }
    });

    // ========================
// JAVASCRIPT KHỞI TẠO BẢN ĐỒ LEAFLET
// ========================

// 1. Khởi tạo bản đồ và đặt tâm tại Giảng đường Nguyễn Đăng (HVNN) [cite: 49]
// Tọa độ Giảng đường Nguyễn Đăng: [21.000054, 105.932112] 
const lat = 21.000054;
const lng = 105.932112;
const zoomLevel = 16; // Zoom gần hơn so với mặc định để thấy rõ HVNN

var map = L.map('map').setView([lat, lng], zoomLevel);

// 2. Thêm Tile Layer (Bản đồ nền) từ OpenStreetMap [cite: 51]
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// 3. Thêm marker tại vị trí showroom [cite: 56]
var marker = L.marker([lat, lng]).addTo(map);

// 4. Gắn Popup cho marker [cite: 57, 58]
marker.bindPopup("<b>Luxury Garage</b><br>Showroom Chính thức tại HVNN.").openPopup();
  
});