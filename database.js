const dummyItem = { id: 'none', name: '-- Choose a Component --', price: 0, score: 0 };

const db = {
    cpu: [
        dummyItem,
        // AM5
        { id: 'c_9950x', name: 'AMD Ryzen 9 9950X', price: 650, score: 24000, cores: 16, socket: 'AM5' },
        { id: 'c_9900x', name: 'AMD Ryzen 9 9900X', price: 499, score: 20000, cores: 12, socket: 'AM5' },
        { id: 'c_9800x3d', name: 'AMD Ryzen 7 9800X3D', price: 440, score: 17000, cores: 8, socket: 'AM5' },
        { id: 'c_9700x', name: 'AMD Ryzen 7 9700X', price: 359, score: 14500, cores: 8, socket: 'AM5' },
        { id: 'c_9600x', name: 'AMD Ryzen 5 9600X', price: 279, score: 12000, cores: 6, socket: 'AM5' },
        { id: 'c_7950x3d', name: 'AMD Ryzen 9 7950X3D', price: 600, score: 23500, cores: 16, socket: 'AM5' },
        { id: 'c_7950x', name: 'AMD Ryzen 9 7950X', price: 550, score: 22000, cores: 16, socket: 'AM5' },
        { id: 'c_7900x', name: 'AMD Ryzen 9 7900X', price: 420, score: 19000, cores: 12, socket: 'AM5' },
        { id: 'c_7800x3d', name: 'AMD Ryzen 7 7800X3D', price: 350, score: 13500, cores: 8, socket: 'AM5' },
        { id: 'c_7700x', name: 'AMD Ryzen 7 7700X', price: 290, score: 12500, cores: 8, socket: 'AM5' },
        { id: 'c_7600x', name: 'AMD Ryzen 5 7600X', price: 200, score: 10500, cores: 6, socket: 'AM5' },
        { id: 'c_7600', name: 'AMD Ryzen 5 7600', price: 180, score: 10000, cores: 6, socket: 'AM5' },
        // AM4
        { id: 'c_5950x', name: 'AMD Ryzen 9 5950X', price: 400, score: 16000, cores: 16, socket: 'AM4' },
        { id: 'c_5900x', name: 'AMD Ryzen 9 5900X', price: 300, score: 13500, cores: 12, socket: 'AM4' },
        { id: 'c_5800x3d', name: 'AMD Ryzen 7 5800X3D', price: 300, score: 11000, cores: 8, socket: 'AM4' },
        { id: 'c_5800x', name: 'AMD Ryzen 7 5800X', price: 200, score: 10500, cores: 8, socket: 'AM4' },
        { id: 'c_5700x', name: 'AMD Ryzen 7 5700X', price: 170, score: 9500, cores: 8, socket: 'AM4' },
        { id: 'c_5600x', name: 'AMD Ryzen 5 5600X', price: 130, score: 8500, cores: 6, socket: 'AM4' },
        { id: 'c_5600', name: 'AMD Ryzen 5 5600', price: 115, score: 8200, cores: 6, socket: 'AM4' },
        { id: 'c_5600g', name: 'AMD Ryzen 5 5600G', price: 110, score: 7500, cores: 6, socket: 'AM4' },
        { id: 'c_5500', name: 'AMD Ryzen 5 5500', price: 90, score: 7000, cores: 6, socket: 'AM4' },
        { id: 'c_4500', name: 'AMD Ryzen 5 4500', price: 75, score: 6000, cores: 6, socket: 'AM4' },
        { id: 'c_3900x', name: 'AMD Ryzen 9 3900X', price: 250, score: 11500, cores: 12, socket: 'AM4' },
        { id: 'c_3700x', name: 'AMD Ryzen 7 3700X', price: 150, score: 8000, cores: 8, socket: 'AM4' },
        { id: 'c_3600', name: 'AMD Ryzen 5 3600', price: 80, score: 6500, cores: 6, socket: 'AM4' },
        { id: 'c_3100', name: 'AMD Ryzen 3 3100', price: 60, score: 5000, cores: 4, socket: 'AM4' },
        // LGA1851 (Intel Core Ultra 200S)
        { id: 'c_ultra9_285k', name: 'Intel Core Ultra 9 285K', price: 590, score: 23000, cores: 24, socket: 'LGA1851' },
        { id: 'c_ultra7_265k', name: 'Intel Core Ultra 7 265K', price: 400, score: 20000, cores: 20, socket: 'LGA1851' },
        { id: 'c_ultra5_245k', name: 'Intel Core Ultra 5 245K', price: 310, score: 15500, cores: 6, socket: 'LGA1851' },
        // LGA1700 (Intel 12th/13th/14th Gen)
        { id: 'c_14900k', name: 'Intel Core i9-14900K', price: 550, score: 21000, cores: 24, socket: 'LGA1700' },
        { id: 'c_14700k', name: 'Intel Core i7-14700K', price: 400, score: 19500, cores: 20, socket: 'LGA1700' },
        { id: 'c_14600k', name: 'Intel Core i5-14600K', price: 300, score: 15000, cores: 14, socket: 'LGA1700' },
        { id: 'c_13900k', name: 'Intel Core i9-13900K', price: 500, score: 20000, cores: 24, socket: 'LGA1700' },
        { id: 'c_13700k', name: 'Intel Core i7-13700K', price: 360, score: 18500, cores: 16, socket: 'LGA1700' },
        { id: 'c_13600k', name: 'Intel Core i5-13600K', price: 280, score: 14000, cores: 6, socket: 'LGA1700' },
        { id: 'c_13400f', name: 'Intel Core i5-13400F', price: 180, score: 11000, cores: 10, socket: 'LGA1700' },
        { id: 'c_13100f', name: 'Intel Core i3-13100F', price: 110, score: 7500, cores: 4, socket: 'LGA1700' },
        { id: 'c_12900k', name: 'Intel Core i9-12900K', price: 350, score: 17000, cores: 16, socket: 'LGA1700' },
        { id: 'c_12700k', name: 'Intel Core i7-12700K', price: 250, score: 14500, cores: 6, socket: 'LGA1700' },
        { id: 'c_12600k', name: 'Intel Core i5-12600K', price: 180, score: 12000, cores: 10, socket: 'LGA1700' },
        { id: 'c_12400f', name: 'Intel Core i5-12400F', price: 140, score: 9500, cores: 6, socket: 'LGA1700' },
        { id: 'c_12100f', name: 'Intel Core i3-12100F', price: 90, score: 6500, cores: 4, socket: 'LGA1700' },
        // LGA1200 (Intel 10th/11th Gen)
        { id: 'c_11900k', name: 'Intel Core i9-11900K', price: 280, score: 12500, cores: 8, socket: 'LGA1200' },
        { id: 'c_11700k', name: 'Intel Core i7-11700K', price: 200, score: 10500, cores: 8, socket: 'LGA1200' },
        { id: 'c_11600k', name: 'Intel Core i5-11600K', price: 160, score: 8500, cores: 6, socket: 'LGA1200' },
        { id: 'c_11400f', name: 'Intel Core i5-11400F', price: 120, score: 7500, cores: 6, socket: 'LGA1200' },
        { id: 'c_10900k', name: 'Intel Core i9-10900K', price: 250, score: 11500, cores: 10, socket: 'LGA1200' },
        { id: 'c_10700k', name: 'Intel Core i7-10700K', price: 180, score: 9500, cores: 8, socket: 'LGA1200' },
        { id: 'c_10400f', name: 'Intel Core i5-10400F', price: 100, score: 6500, cores: 6, socket: 'LGA1200' },
        { id: 'c_10100f', name: 'Intel Core i3-10100F', price: 70, score: 4500, cores: 6, socket: 'LGA1200' }
    ],
    gpu: [
        dummyItem,
        // RTX 60 series (Future)
        // RTX 50 series
        { id: 'g_5090', name: 'NVIDIA RTX 5090 32GB', price: 1999, score: 41000, vram: '32GB', chipset: 'GeForce RTX 5090', tdp: 450, length: 340, memoryType: 'GDDR7', interface: 'PCIe 5.0 x16', cooling: '3 Fans', memory_gb: 32 },
        { id: 'g_5080', name: 'NVIDIA RTX 5080 16GB', price: 1199, score: 29500, vram: '16GB', chipset: 'GeForce RTX 5080', tdp: 320, length: 310, memoryType: 'GDDR7', interface: 'PCIe 5.0 x16', cooling: '3 Fans', memory_gb: 16 },
        { id: 'g_5070ti', name: 'NVIDIA RTX 5070 Ti 16GB', price: 899, score: 24500, vram: '16GB', chipset: 'GeForce RTX 5070 Ti', tdp: 220, length: 280, memoryType: 'GDDR7', interface: 'PCIe 5.0 x16', cooling: '2 Fans', memory_gb: 16 },
        { id: 'g_5070', name: 'NVIDIA RTX 5070 12GB', price: 599, score: 20500, vram: '12GB', chipset: 'GeForce RTX 5070', tdp: 220, length: 280, memoryType: 'GDDR7', interface: 'PCIe 5.0 x16', cooling: '2 Fans', memory_gb: 12 },
        // RTX 40 series
        { id: 'g_4090', name: 'NVIDIA RTX 4090 24GB', price: 1799, score: 36000, vram: '24GB', chipset: 'GeForce RTX 4090', tdp: 450, length: 340, memoryType: 'GDDR6X', interface: 'PCIe 4.0 x16', cooling: '3 Fans', memory_gb: 24 },
        { id: 'g_4080s', name: 'NVIDIA RTX 4080 Super', price: 999, score: 28000, vram: '16GB', chipset: 'GeForce RTX 4080 Super', tdp: 320, length: 310, memoryType: 'GDDR6X', interface: 'PCIe 4.0 x16', cooling: '3 Fans', memory_gb: 8 },
        { id: 'g_4080', name: 'NVIDIA RTX 4080 16GB', price: 1100, score: 27000, vram: '16GB', chipset: 'GeForce RTX 4080', tdp: 320, length: 310, memoryType: 'GDDR6X', interface: 'PCIe 4.0 x16', cooling: '3 Fans', memory_gb: 16 },
        { id: 'g_4070tis', name: 'NVIDIA RTX 4070 Ti Super', price: 799, score: 24000, vram: '16GB', chipset: 'GeForce RTX 4070 Ti Super', tdp: 220, length: 280, memoryType: 'GDDR6X', interface: 'PCIe 4.0 x16', cooling: '2 Fans', memory_gb: 8 },
        { id: 'g_4070ti', name: 'NVIDIA RTX 4070 Ti 12GB', price: 750, score: 22500, vram: '12GB', chipset: 'GeForce RTX 4070 Ti', tdp: 220, length: 280, memoryType: 'GDDR6X', interface: 'PCIe 4.0 x16', cooling: '2 Fans', memory_gb: 12 },
        { id: 'g_4070s', name: 'NVIDIA RTX 4070 Super', price: 599, score: 21000, vram: '12GB', chipset: 'GeForce RTX 4070 Super', tdp: 220, length: 280, memoryType: 'GDDR6X', interface: 'PCIe 4.0 x16', cooling: '2 Fans', memory_gb: 8 },
        { id: 'g_4070', name: 'NVIDIA RTX 4070 12GB', price: 549, score: 18000, vram: '12GB', chipset: 'GeForce RTX 4070', tdp: 220, length: 280, memoryType: 'GDDR6X', interface: 'PCIe 4.0 x16', cooling: '2 Fans', memory_gb: 12 },
        { id: 'g_4060ti16', name: 'NVIDIA RTX 4060 Ti 16GB', price: 449, score: 13500, vram: '16GB', chipset: 'GeForce RTX 4060 Ti', tdp: 150, length: 240, memoryType: 'GDDR6', interface: 'PCIe 4.0 x16', cooling: '2 Fans', memory_gb: 16 },
        { id: 'g_4060ti8', name: 'NVIDIA RTX 4060 Ti 8GB', price: 399, score: 13000, vram: '8GB', chipset: 'GeForce RTX 4060 Ti', tdp: 150, length: 240, memoryType: 'GDDR6', interface: 'PCIe 4.0 x16', cooling: '2 Fans', memory_gb: 8 },
        { id: 'g_4060', name: 'NVIDIA RTX 4060 8GB', price: 299, score: 10500, vram: '8GB', chipset: 'GeForce RTX 4060', tdp: 150, length: 240, memoryType: 'GDDR6', interface: 'PCIe 4.0 x16', cooling: '2 Fans', memory_gb: 8 },
        // RTX 30 series
        { id: 'g_3090ti', name: 'NVIDIA RTX 3090 Ti 24GB', price: 1200, score: 22000, vram: '24GB', chipset: 'GeForce RTX 3090 Ti', tdp: 150, length: 240, memoryType: 'GDDR6', interface: 'PCIe 4.0 x16', cooling: '2 Fans', memory_gb: 24 },
        { id: 'g_3090', name: 'NVIDIA RTX 3090 24GB', price: 900, score: 20000, vram: '24GB', chipset: 'GeForce RTX 3090', tdp: 150, length: 240, memoryType: 'GDDR6', interface: 'PCIe 4.0 x16', cooling: '2 Fans', memory_gb: 24 },
        { id: 'g_3080ti', name: 'NVIDIA RTX 3080 Ti 12GB', price: 700, score: 19500, vram: '12GB', chipset: 'GeForce RTX 3080 Ti', tdp: 150, length: 240, memoryType: 'GDDR6', interface: 'PCIe 4.0 x16', cooling: '2 Fans', memory_gb: 12 },
        { id: 'g_3080_12', name: 'NVIDIA RTX 3080 12GB', price: 550, score: 18500, vram: '12GB', chipset: 'GeForce RTX 3080', tdp: 150, length: 240, memoryType: 'GDDR6', interface: 'PCIe 4.0 x16', cooling: '2 Fans', memory_gb: 12 },
        { id: 'g_3080', name: 'NVIDIA RTX 3080 10GB', price: 450, score: 18000, vram: '10GB', chipset: 'GeForce RTX 3080', tdp: 150, length: 240, memoryType: 'GDDR6', interface: 'PCIe 4.0 x16', cooling: '2 Fans', memory_gb: 10 },
        { id: 'g_3070ti', name: 'NVIDIA RTX 3070 Ti 8GB', price: 400, score: 15000, vram: '8GB', chipset: 'GeForce RTX 3070 Ti', tdp: 220, length: 280, memoryType: 'GDDR6', interface: 'PCIe 4.0 x16', cooling: '2 Fans', memory_gb: 8 },
        { id: 'g_3070', name: 'NVIDIA RTX 3070 8GB', price: 350, score: 14000, vram: '8GB', chipset: 'GeForce RTX 3070', tdp: 220, length: 280, memoryType: 'GDDR6', interface: 'PCIe 4.0 x16', cooling: '2 Fans', memory_gb: 8 },
        { id: 'g_3060ti', name: 'NVIDIA RTX 3060 Ti 8GB', price: 300, score: 12000, vram: '8GB', chipset: 'GeForce RTX 3060 Ti', tdp: 150, length: 240, memoryType: 'GDDR6', interface: 'PCIe 4.0 x16', cooling: '2 Fans', memory_gb: 8 },
        { id: 'g_3060_12', name: 'NVIDIA RTX 3060 12GB', price: 250, score: 8700, vram: '12GB', chipset: 'GeForce RTX 3060', tdp: 150, length: 240, memoryType: 'GDDR6', interface: 'PCIe 4.0 x16', cooling: '2 Fans', memory_gb: 12 },
        { id: 'g_3060_8', name: 'NVIDIA RTX 3060 8GB', price: 230, score: 7800, vram: '8GB', chipset: 'GeForce RTX 3060', tdp: 150, length: 240, memoryType: 'GDDR6', interface: 'PCIe 4.0 x16', cooling: '2 Fans', memory_gb: 8 },
        { id: 'g_3050', name: 'NVIDIA RTX 3050 8GB', price: 180, score: 6000, vram: '8GB', chipset: 'GeForce RTX 3050', tdp: 150, length: 240, memoryType: 'GDDR6', interface: 'PCIe 4.0 x16', cooling: '2 Fans', memory_gb: 8 },
        // RTX 20 & GTX 16/10 series
        { id: 'g_2080ti', name: 'NVIDIA RTX 2080 Ti 11GB', price: 350, score: 14500, vram: '11GB', chipset: 'GeForce RTX 2080 Ti', tdp: 150, length: 240, memoryType: 'GDDR6', interface: 'PCIe 4.0 x16', cooling: '2 Fans', memory_gb: 11 },
        { id: 'g_2080s', name: 'NVIDIA RTX 2080 Super', price: 250, score: 11500, vram: '8GB', chipset: 'GeForce RTX 2080 Super', tdp: 150, length: 240, memoryType: 'GDDR6', interface: 'PCIe 4.0 x16', cooling: '2 Fans', memory_gb: 8 },
        { id: 'g_2070s', name: 'NVIDIA RTX 2070 Super', price: 200, score: 10000, vram: '8GB', chipset: 'GeForce RTX 2070 Super', tdp: 220, length: 280, memoryType: 'GDDR6', interface: 'PCIe 4.0 x16', cooling: '2 Fans', memory_gb: 8 },
        { id: 'g_2060s', name: 'NVIDIA RTX 2060 Super', price: 160, score: 8500, vram: '8GB', chipset: 'GeForce RTX 2060 Super', tdp: 150, length: 240, memoryType: 'GDDR6', interface: 'PCIe 4.0 x16', cooling: '2 Fans', memory_gb: 8 },
        { id: 'g_2060', name: 'NVIDIA RTX 2060 6GB', price: 140, score: 7500, vram: '6GB', chipset: 'GeForce RTX 2060', tdp: 150, length: 240, memoryType: 'GDDR6', interface: 'PCIe 4.0 x16', cooling: '2 Fans', memory_gb: 6 },
        { id: 'g_1660s', name: 'NVIDIA GTX 1660 Super', price: 120, score: 6000, vram: '6GB', chipset: 'GeForce GTX 1660 Super', tdp: 150, length: 240, memoryType: 'GDDR6', interface: 'PCIe 4.0 x16', cooling: '2 Fans', memory_gb: 8 },
        { id: 'g_1650s', name: 'NVIDIA GTX 1650 Super', price: 100, score: 4500, vram: '4GB', chipset: 'GeForce GTX 1650 Super', tdp: 150, length: 240, memoryType: 'GDDR6', interface: 'PCIe 4.0 x16', cooling: '2 Fans', memory_gb: 8 },
        { id: 'g_1080ti', name: 'NVIDIA GTX 1080 Ti 11GB', price: 150, score: 9500, vram: '11GB', chipset: 'GeForce GTX 1080 Ti', tdp: 150, length: 240, memoryType: 'GDDR6', interface: 'PCIe 4.0 x16', cooling: '2 Fans', memory_gb: 11 },
        { id: 'g_1080', name: 'NVIDIA GTX 1080 8GB', price: 110, score: 7200, vram: '8GB', chipset: 'GeForce GTX 1080', tdp: 150, length: 240, memoryType: 'GDDR6', interface: 'PCIe 4.0 x16', cooling: '2 Fans', memory_gb: 8 },
        { id: 'g_1070', name: 'NVIDIA GTX 1070 8GB', price: 80, score: 5500, vram: '8GB', chipset: 'GeForce GTX 1070', tdp: 220, length: 280, memoryType: 'GDDR6', interface: 'PCIe 4.0 x16', cooling: '2 Fans', memory_gb: 8 },
        { id: 'g_1060_6', name: 'NVIDIA GTX 1060 6GB', price: 60, score: 4000, vram: '6GB', chipset: 'GeForce GTX 1060', tdp: 150, length: 240, memoryType: 'GDDR6', interface: 'PCIe 4.0 x16', cooling: '2 Fans', memory_gb: 6 },
        // AMD RX 7000
        { id: 'g_7900xtx', name: 'AMD Radeon RX 7900 XTX', price: 899, score: 29000, vram: '24GB', chipset: 'Radeon RX 7900 XTX', tdp: 450, length: 340, memoryType: 'GDDR6', interface: 'PCIe 4.0 x16', cooling: '3 Fans', memory_gb: 8 },
        { id: 'g_7900xt', name: 'AMD Radeon RX 7900 XT', price: 699, score: 25000, vram: '20GB', chipset: 'Radeon RX 7900 XT', tdp: 320, length: 310, memoryType: 'GDDR6', interface: 'PCIe 4.0 x16', cooling: '3 Fans', memory_gb: 8 },
        { id: 'g_7900gre', name: 'AMD Radeon RX 7900 GRE', price: 549, score: 21500, vram: '16GB', chipset: 'Radeon RX 7900 GRE', tdp: 150, length: 240, memoryType: 'GDDR6', interface: 'PCIe 4.0 x16', cooling: '2 Fans', memory_gb: 8 },
        { id: 'g_7800xt', name: 'AMD Radeon RX 7800 XT', price: 499, score: 19000, vram: '16GB', chipset: 'Radeon RX 7800 XT', tdp: 220, length: 280, memoryType: 'GDDR6', interface: 'PCIe 4.0 x16', cooling: '2 Fans', memory_gb: 8 },
        { id: 'g_7700xt', name: 'AMD Radeon RX 7700 XT', price: 419, score: 16500, vram: '12GB', chipset: 'Radeon RX 7700 XT', tdp: 220, length: 280, memoryType: 'GDDR6', interface: 'PCIe 4.0 x16', cooling: '2 Fans', memory_gb: 8 },
        { id: 'g_7600xt', name: 'AMD Radeon RX 7600 XT', price: 329, score: 11500, vram: '16GB', chipset: 'Radeon RX 7600 XT', tdp: 150, length: 240, memoryType: 'GDDR6', interface: 'PCIe 4.0 x16', cooling: '2 Fans', memory_gb: 8 },
        { id: 'g_7600', name: 'AMD Radeon RX 7600', price: 259, score: 10500, vram: '8GB', chipset: 'Radeon RX 7600', tdp: 150, length: 240, memoryType: 'GDDR6', interface: 'PCIe 4.0 x16', cooling: '2 Fans', memory_gb: 8 },
        // AMD RX 6000
        { id: 'g_6950xt', name: 'AMD Radeon RX 6950 XT', price: 550, score: 21000, vram: '16GB', chipset: 'Radeon RX 6950 XT', tdp: 150, length: 240, memoryType: 'GDDR6', interface: 'PCIe 4.0 x16', cooling: '2 Fans', memory_gb: 8 },
        { id: 'g_6900xt', name: 'AMD Radeon RX 6900 XT', price: 500, score: 19500, vram: '16GB', chipset: 'Radeon RX 6900 XT', tdp: 150, length: 240, memoryType: 'GDDR6', interface: 'PCIe 4.0 x16', cooling: '2 Fans', memory_gb: 8 },
        { id: 'g_6800xt', name: 'AMD Radeon RX 6800 XT', price: 400, score: 18500, vram: '16GB', chipset: 'Radeon RX 6800 XT', tdp: 150, length: 240, memoryType: 'GDDR6', interface: 'PCIe 4.0 x16', cooling: '2 Fans', memory_gb: 8 },
        { id: 'g_6800', name: 'AMD Radeon RX 6800', price: 350, score: 16000, vram: '16GB', chipset: 'Radeon RX 6800', tdp: 150, length: 240, memoryType: 'GDDR6', interface: 'PCIe 4.0 x16', cooling: '2 Fans', memory_gb: 8 },
        { id: 'g_6750xt', name: 'AMD Radeon RX 6750 XT', price: 330, score: 13500, vram: '12GB', chipset: 'Radeon RX 6750 XT', tdp: 150, length: 240, memoryType: 'GDDR6', interface: 'PCIe 4.0 x16', cooling: '2 Fans', memory_gb: 8 },
        { id: 'g_6700xt', name: 'AMD Radeon RX 6700 XT', price: 300, score: 12500, vram: '12GB', chipset: 'Radeon RX 6700 XT', tdp: 220, length: 280, memoryType: 'GDDR6', interface: 'PCIe 4.0 x16', cooling: '2 Fans', memory_gb: 8 },
        { id: 'g_6650xt', name: 'AMD Radeon RX 6650 XT', price: 230, score: 10000, vram: '8GB', chipset: 'Radeon RX 6650 XT', tdp: 150, length: 240, memoryType: 'GDDR6', interface: 'PCIe 4.0 x16', cooling: '2 Fans', memory_gb: 8 },
        { id: 'g_6600xt', name: 'AMD Radeon RX 6600 XT', price: 210, score: 9500, vram: '8GB', chipset: 'Radeon RX 6600 XT', tdp: 150, length: 240, memoryType: 'GDDR6', interface: 'PCIe 4.0 x16', cooling: '2 Fans', memory_gb: 8 },
        { id: 'g_6600', name: 'AMD Radeon RX 6600', price: 180, score: 8000, vram: '8GB', chipset: 'Radeon RX 6600', tdp: 150, length: 240, memoryType: 'GDDR6', interface: 'PCIe 4.0 x16', cooling: '2 Fans', memory_gb: 8 },
        { id: 'g_6500xt', name: 'AMD Radeon RX 6500 XT', price: 130, score: 5000, vram: '4GB', chipset: 'Radeon RX 6500 XT', tdp: 150, length: 240, memoryType: 'GDDR6', interface: 'PCIe 4.0 x16', cooling: '2 Fans', memory_gb: 8 },
        // AMD RX 5000
        { id: 'g_5700xt', name: 'AMD Radeon RX 5700 XT', price: 150, score: 9000, vram: '8GB', chipset: 'Radeon RX 5700 XT', tdp: 220, length: 280, memoryType: 'GDDR6', interface: 'PCIe 4.0 x16', cooling: '2 Fans', memory_gb: 8 },
        { id: 'g_5700', name: 'AMD Radeon RX 5700', price: 130, score: 8000, vram: '8GB', chipset: 'Radeon RX 5700', tdp: 220, length: 280, memoryType: 'GDDR6', interface: 'PCIe 4.0 x16', cooling: '2 Fans', memory_gb: 8 },
        { id: 'g_5600xt', name: 'AMD Radeon RX 5600 XT', price: 110, score: 7000, vram: '6GB', chipset: 'Radeon RX 5600 XT', tdp: 150, length: 240, memoryType: 'GDDR6', interface: 'PCIe 4.0 x16', cooling: '2 Fans', memory_gb: 8 },
        { id: 'g_580', name: 'AMD Radeon RX 580 8GB', price: 60, score: 4200, vram: '8GB', chipset: 'Radeon RX 580', tdp: 150, length: 240, memoryType: 'GDDR6', interface: 'PCIe 4.0 x16', cooling: '2 Fans', memory_gb: 8 }
    ],
    mobo: [
        dummyItem,
        // AM5 (DDR5)
        { id: 'm_godlike', name: 'MSI MEG X870E GODLIKE', price: 1200, socket: 'AM5', ramType: 'DDR5' },
        { id: 'm_crossx870', name: 'ASUS ROG CROSSHAIR X870E HERO', price: 700, socket: 'AM5', ramType: 'DDR5' },
        { id: 'm_taichix870', name: 'ASRock X870E Taichi', price: 500, socket: 'AM5', ramType: 'DDR5' },
        { id: 'm_tomax870', name: 'MSI X870 MAG TOMAHAWK WIFI', price: 230, socket: 'AM5', ramType: 'DDR5' },
        { id: 'm_strixb650e', name: 'ASUS ROG STRIX B650E-F GAMING', price: 250, socket: 'AM5', ramType: 'DDR5' },
        { id: 'm_tomab650', name: 'MSI MAG B650 TOMAHAWK WIFI', price: 190, socket: 'AM5', ramType: 'DDR5' },
        { id: 'm_aorusb650', name: 'Gigabyte B650 AORUS ELITE AX', price: 180, socket: 'AM5', ramType: 'DDR5' },
        { id: 'm_pro620', name: 'ASRock A620M Pro RS WIFI', price: 120, socket: 'AM5', ramType: 'DDR5' },
        // AM4 (DDR4)
        { id: 'm_darkhero', name: 'ASUS ROG CROSSHAIR VIII DARK HERO', price: 400, socket: 'AM4', ramType: 'DDR4' },
        { id: 'm_tomax570', name: 'MSI MAG X570S TOMAHAWK MAX WIFI', price: 220, socket: 'AM4', ramType: 'DDR4' },
        { id: 'm_strixb550f', name: 'ASUS ROG STRIX B550-F GAMING WIFI II', price: 180, socket: 'AM4', ramType: 'DDR4' },
        { id: 'm_tomab550', name: 'MSI MAG B550 TOMAHAWK', price: 150, socket: 'AM4', ramType: 'DDR4' },
        { id: 'm_aorusb450', name: 'Gigabyte B450 AORUS M', price: 90, socket: 'AM4', ramType: 'DDR4' },
        { id: 'm_ds3h', name: 'Gigabyte B450M DS3H WIFI', price: 75, socket: 'AM4', ramType: 'DDR4' },
        { id: 'm_a320', name: 'ASUS Prime A320M-K', price: 50, socket: 'AM4', ramType: 'DDR4' },
        // LGA1851 (DDR5)
        { id: 'm_z890hero', name: 'ASUS ROG MAXIMUS Z890 HERO', price: 650, socket: 'LGA1851', ramType: 'DDR5' },
        { id: 'm_z890tomahawk', name: 'MSI MAG Z890 TOMAHAWK WIFI', price: 280, socket: 'LGA1851', ramType: 'DDR5' },
        { id: 'm_z890aorus', name: 'Gigabyte Z890 AORUS ELITE AX', price: 240, socket: 'LGA1851', ramType: 'DDR5' },
        // LGA1700 (DDR5)
        { id: 'm_z790hero', name: 'ASUS ROG MAXIMUS Z790 HERO', price: 600, socket: 'LGA1700', ramType: 'DDR5' },
        { id: 'm_z790aorus', name: 'Gigabyte Z790 AORUS MASTER', price: 450, socket: 'LGA1700', ramType: 'DDR5' },
        { id: 'm_tomaz790', name: 'MSI MAG Z790 TOMAHAWK WIFI', price: 240, socket: 'LGA1700', ramType: 'DDR5' },
        { id: 'm_b760strix', name: 'ASUS ROG STRIX B760-F GAMING WIFI', price: 200, socket: 'LGA1700', ramType: 'DDR5' },
        { id: 'm_b760aorus', name: 'Gigabyte B760 AORUS ELITE AX', price: 170, socket: 'LGA1700', ramType: 'DDR5' },
        // LGA1700 (DDR4)
        { id: 'm_z690d4', name: 'ASUS Prime Z690-P D4', price: 160, socket: 'LGA1700', ramType: 'DDR4' },
        { id: 'm_b660d4', name: 'MSI PRO B660M-A DDR4', price: 120, socket: 'LGA1700', ramType: 'DDR4' },
        { id: 'm_h610d4', name: 'ASUS Prime H610M-E D4', price: 90, socket: 'LGA1700', ramType: 'DDR4' },
        // LGA1200 (DDR4)
        { id: 'm_z590', name: 'ASUS ROG STRIX Z590-E GAMING WIFI', price: 250, socket: 'LGA1200', ramType: 'DDR4' },
        { id: 'm_b560', name: 'MSI MAG B560 TOMAHAWK WIFI', price: 140, socket: 'LGA1200', ramType: 'DDR4' },
        { id: 'm_z490', name: 'Gigabyte Z490 AORUS ELITE', price: 160, socket: 'LGA1200', ramType: 'DDR4' },
        { id: 'm_h410', name: 'ASRock H410M-HDV', price: 70, socket: 'LGA1200', ramType: 'DDR4' }
    ],
    ram: [
        dummyItem,
        // DDR5
        { id: 'r_96_6400', name: '96GB (2x48GB) DDR5-6400 CL32 Corsair Dom.', price: 350, type: 'DDR5' },
        { id: 'r_64_6400', name: '64GB (2x32GB) DDR5-6400 CL32 G.Skill Trident Z5', price: 230, type: 'DDR5' },
        { id: 'r_64_6000', name: '64GB (2x32GB) DDR5-6000 CL30 Corsair Veng.', price: 210, type: 'DDR5' },
        { id: 'r_32_7200', name: '32GB (2x16GB) DDR5-7200 CL34 TeamGroup', price: 150, type: 'DDR5' },
        { id: 'r_32_6400', name: '32GB (2x16GB) DDR5-6400 CL32 G.Skill Flare', price: 125, type: 'DDR5' },
        { id: 'r_32_6000', name: '32GB (2x16GB) DDR5-6000 CL30 Corsair Veng.', price: 115, type: 'DDR5' },
        { id: 'r_32_5600', name: '32GB (2x16GB) DDR5-5600 CL36 Crucial Pro', price: 95, type: 'DDR5' },
        { id: 'r_16_5200', name: '16GB (2x8GB) DDR5-5200 CL40 Kingston Fury', price: 65, type: 'DDR5' },
        // DDR4
        { id: 'r_128_3600_d4', name: '128GB (4x32GB) DDR4-3600 CL18 Corsair Veng.', price: 280, type: 'DDR4' },
        { id: 'r_64_3600_d4', name: '64GB (2x32GB) DDR4-3600 CL18 G.Skill Ripjaws', price: 130, type: 'DDR4' },
        { id: 'r_32_4000_d4', name: '32GB (2x16GB) DDR4-4000 CL18 Patriot Viper', price: 95, type: 'DDR4' },
        { id: 'r_32_3600_d4', name: '32GB (2x16GB) DDR4-3600 CL18 Corsair Veng.', price: 75, type: 'DDR4' },
        { id: 'r_32_3200_d4', name: '32GB (2x16GB) DDR4-3200 CL16 TeamGroup', price: 65, type: 'DDR4' },
        { id: 'r_16_3600_d4', name: '16GB (2x8GB) DDR4-3600 CL18 G.Skill Ripjaws', price: 45, type: 'DDR4' },
        { id: 'r_16_3200_d4', name: '16GB (2x8GB) DDR4-3200 CL16 Corsair Veng.', price: 40, type: 'DDR4' },
        { id: 'r_16_2666_d4', name: '16GB (2x8GB) DDR4-2666 CL19 Crucial', price: 35, type: 'DDR4' },
        { id: 'r_8_3200_d4', name: '8GB (1x8GB) DDR4-3200 CL16 G.Skill', price: 20, type: 'DDR4' }
    ],
    storage: [
        dummyItem,
        { id: 's_850x_4tb', name: 'WD Black SN850X 4TB NVMe', price: 310 },
        { id: 's_990_4tb', name: 'Samsung 990 Pro 4TB NVMe', price: 320 },
        { id: 's_p3_4tb', name: 'Crucial P3 Plus 4TB NVMe', price: 220 },
        { id: 's_850x_2tb', name: 'WD Black SN850X 2TB NVMe', price: 155 },
        { id: 's_990_2tb', name: 'Samsung 990 Pro 2TB NVMe', price: 170 },
        { id: 's_980_2tb', name: 'Samsung 980 Pro 2TB NVMe', price: 140 },
        { id: 's_p3_2tb', name: 'Crucial P3 Plus 2TB NVMe', price: 110 },
        { id: 's_sn580_2tb', name: 'WD Blue SN580 2TB NVMe', price: 105 },
        { id: 's_850x_1tb', name: 'WD Black SN850X 1TB NVMe', price: 90 },
        { id: 's_990_1tb', name: 'Samsung 990 Pro 1TB NVMe', price: 110 },
        { id: 's_p3_1tb', name: 'Crucial P3 Plus 1TB NVMe', price: 65 },
        { id: 's_sn580_1tb', name: 'WD Blue SN580 1TB NVMe', price: 60 },
        { id: 's_p3_500g', name: 'Crucial P3 500GB NVMe', price: 40 },
        { id: 's_mx500_2tb', name: 'Crucial MX500 2TB SATA SSD', price: 110 },
        { id: 's_mx500_1tb', name: 'Crucial MX500 1TB SATA SSD', price: 70 },
        { id: 's_barracuda_4tb', name: 'Seagate Barracuda 4TB HDD', price: 80 },
        { id: 's_barracuda_2tb', name: 'Seagate Barracuda 2TB HDD', price: 55 }
    ],
    cooling: [
        dummyItem,
        { id: 'cool_kraken_elite_360', name: 'NZXT Kraken Elite 360 RGB', price: 280 },
        { id: 'cool_tryx_360', name: 'TRYX PANORAMA SE 360mm', price: 250 },
        { id: 'cool_corsair_h150i', name: 'Corsair iCUE H150i ELITE LCD XT', price: 260 },
        { id: 'cool_arctic_360', name: 'Arctic Liquid Freezer III 360', price: 120 },
        { id: 'cool_ls720', name: 'Deepcool LS720 360mm', price: 100 },
        { id: 'cool_kraken_240', name: 'NZXT Kraken 240', price: 140 },
        { id: 'cool_arctic_240', name: 'Arctic Liquid Freezer III 240', price: 90 },
        { id: 'cool_nhd15', name: 'Noctua NH-D15 chromax.black', price: 120 },
        { id: 'cool_ak620', name: 'Deepcool AK620', price: 65 },
        { id: 'cool_peerless', name: 'Thermalright Peerless Assassin 120 SE', price: 35 },
        { id: 'cool_phantom', name: 'Thermalright Phantom Spirit 120 SE', price: 38 },
        { id: 'cool_hyper212', name: 'Cooler Master Hyper 212 Black', price: 30 },
        { id: 'cool_ak400', name: 'Deepcool AK400', price: 30 },
        { id: 'cool_stock', name: 'OEM Stock Cooler (Included)', price: 0 }
    ],
    psu: [
        dummyItem,
        { id: 'p_1600i', name: 'Corsair AX1600i 1600W 80+ Titanium', price: 600 },
        { id: 'p_1500_dark', name: 'be quiet! Dark Power Pro 13 1500W', price: 450 },
        { id: 'p_1200x', name: 'Corsair RM1200x Shift 1200W', price: 220 },
        { id: 'p_1000_vertex', name: 'Seasonic VERTEX GX-1000 1000W', price: 190 },
        { id: 'p_1000e', name: 'Corsair RM1000e 1000W', price: 145 },
        { id: 'p_850x', name: 'Corsair RM850x 850W', price: 130 },
        { id: 'p_850_focus', name: 'Seasonic FOCUS GX-850 850W', price: 140 },
        { id: 'p_850e', name: 'Corsair RM850e 850W', price: 120 },
        { id: 'p_750e', name: 'Corsair RM750e 750W', price: 100 },
        { id: 'p_750_focus', name: 'Seasonic FOCUS GX-750 750W', price: 110 },
        { id: 'p_650_cx', name: 'Corsair CX650M 650W', price: 80 },
        { id: 'p_650b', name: 'EVGA 650 B5 650W', price: 75 },
        { id: 'p_550_cx', name: 'Corsair CX550M 550W', price: 65 },
        { id: 'p_500_therm', name: 'Thermaltake Smart 500W', price: 40 }
    ],
    case: [
        dummyItem,
        { id: 'case_nv9', name: 'Phanteks NV9', price: 250 },
        { id: 'case_y70', name: 'HYTE Y70 Touch', price: 360 },
        { id: 'case_nv7', name: 'Phanteks NV7', price: 200 },
        { id: 'case_evo_xl', name: 'Lian Li O11 Dynamic EVO XL', price: 230 },
        { id: 'case_evo', name: 'Lian Li O11 Dynamic EVO RGB', price: 160 },
        { id: 'case_vision', name: 'Lian Li O11 Vision', price: 140 },
        { id: 'case_y60', name: 'HYTE Y60', price: 190 },
        { id: 'case_torrent', name: 'Fractal Design Torrent', price: 190 },
        { id: 'case_north', name: 'Fractal Design North', price: 140 },
        { id: 'case_5000d', name: 'Corsair 5000D Airflow', price: 150 },
        { id: 'case_4000d', name: 'Corsair 4000D Airflow', price: 90 },
        { id: 'case_h9', name: 'NZXT H9 Flow', price: 160 },
        { id: 'case_h7', name: 'NZXT H7 Flow', price: 130 },
        { id: 'case_h5', name: 'NZXT H5 Flow', price: 95 },
        { id: 'case_p400a', name: 'Phanteks Eclipse P400A', price: 90 },
        { id: 'case_pop', name: 'Fractal Design Pop Air', price: 80 },
        { id: 'case_h510', name: 'NZXT H510', price: 70 },
        { id: 'case_q300l', name: 'Cooler Master MasterBox Q300L', price: 40 },
        { id: 'case_nr200', name: 'Cooler Master NR200 (ITX)', price: 90 },
        { id: 'case_terra', name: 'Fractal Design Terra (ITX)', price: 180 }
    ],
    fans: [
        { id: 'fan_lianli_uni', name: 'Lian Li UNI FAN SL-INFINITY 120 (3-Pack)', price: 90 },
        { id: 'fan_corsair_ql', name: 'Corsair iCUE QL120 RGB (3-Pack)', price: 120 },
        { id: 'fan_noctua_a12', name: 'Noctua NF-A12x25 PWM (Brown)', price: 30 },
        { id: 'fan_noctua_chromax', name: 'Noctua NF-A12x25 Chromax Black', price: 35 },
        { id: 'fan_arctic_p12', name: 'ARCTIC P12 PWM PST (5-Pack)', price: 35 },
        { id: 'fan_nzxt_aer', name: 'NZXT F120 RGB (Triple Pack)', price: 80 }
    ],
    accessories: [
        { id: 'acc_strimer', name: 'Lian Li Strimer Plus V2 24-Pin RGB Cable', price: 60 },
        { id: 'acc_kryonaut', name: 'Thermal Grizzly Kryonaut Thermal Paste', price: 10 },
        { id: 'acc_vertical_gpu', name: 'Cooler Master Vertical GPU Mount V3', price: 65 },
        { id: 'acc_corsair_commander', name: 'Corsair iCUE Commander Core XT', price: 55 },
        { id: 'acc_contact_frame', name: 'Thermalright CPU Contact Frame', price: 15 }
    ],
    monitor: [
        { id: 'mon_aw3225qf', name: 'Alienware 32" 4K QD-OLED 240Hz (AW3225QF)', price: 1199 },
        { id: 'mon_pg27aqdm', name: 'ASUS ROG Swift 27" 1440p OLED 240Hz', price: 899 },
        { id: 'mon_g7', name: 'Samsung Odyssey G7 27" 1440p 240Hz', price: 550 },
        { id: 'mon_lg27', name: 'LG 27GP850-B 27" 1440p 165Hz IPS', price: 300 },
        { id: 'mon_zowie', name: 'BenQ ZOWIE XL2566K 24.5" 1080p 360Hz', price: 599 },
        { id: 'mon_budget', name: 'AOC 24G2 24" 1080p 144Hz IPS', price: 130 }
    ]
};

// Auto-Sort all database categories by Performance (Score) or Price
Object.keys(db).forEach(catKey => {
    const items = db[catKey].filter(i => i.id !== 'none');
    items.sort((a, b) => {
        const scoreA = a.score || 0;
        const scoreB = b.score || 0;
        if (scoreA !== scoreB) return scoreB - scoreA;
        return b.price - a.price;
    });
    db[catKey] = [dummyItem, ...items];
});
