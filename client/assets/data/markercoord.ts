import { TBuildingData } from "@/Localization/Type/index";

export const buildings: TBuildingData[] = [
    {
        id: 1, /*A5*/
        title: "Hội trường A5",
        image: "https://img.loigiaihay.com/picture/2020/0520/hoi-nghi-hoa-binh-o-vec-xai-1919-1920.png",
        description: "Hội trường A5",
        latitude: 10.773238746328245,
        longitude: 106.65960321447547,
        rooms: [
            {
                id: 1,
                title: "Phòng hội trường",
                image: "https://img.loigiaihay.com/picture/2020/0520/hoi-nghi-hoa-binh-o-vec-xai-1919-1920.png",
                description: "Phòng hội trường được dùng cho các sự kiện quan trọng như Hòa ước Versaile, bầu cử tổng thống, ...",
                comments: [{
                    userid: 101,
                    content: "Ở đây Wifi yếu :((",
                }],
            },
        ],
        comments: [{
            userid: 101,
            content: "Comment này mang tính chất thử nghiệm",
        }],
    }, 
    {
        id: 2, /*KTXD*/
        title: "Tòa nhà B6",
        image: "https://i.postimg.cc/9XgL0pTS/B6.png",
        description: "Đây là văn phòng khoa Kỹ thuật Xây dựng",
        latitude: 10.773629088257646,
        longitude: 106.65889886691099,
        rooms: [
            {
                id: 0,
                title: "Văn phòng khoa KTXD",
                image: "https://inhome.vn/hm_content/uploads/thiet-ke/lop-hoc-3_2.jpg",
                description: "Chủ yếu được sinh viên dùng để xin giấy xác nhận SV",
                comments: [{
                    userid: 101,
                    content: "KTXDDDD",
                }],
            },
        ],
        comments: [{
            userid: 101,
            content: "Comments",
        }],
    },
    {
        id: 3, /*KH_KTMT*/
        title: "Tòa nhà A3",
        image: "https://i.postimg.cc/KzyQdP4Y/A3.png",
        description: "Đây là văn phòng khoa Khoa học và Kỹ thuật Máy tính",
        latitude: 10.77351706895672,
        longitude: 106.66077937697757,
        rooms: [
            {
                id: 0,
                title: "Văn phòng khoa KHKTMT",
                image: "https://img.loigiaihay.com/picture/2020/0520/hoi-nghi-hoa-binh-o-vec-xai-1919-1920.png",
                description: "Chủ yếu được sinh viên dùng để xin giấy xác nhận SV",
                comments: [{
                    userid: 101,
                    content: "Cho e xin đổi chỗ thực tập",
                }],
            },
            {
                id: 1,
                title: "Phòng Seminar",
                image: "https://img.loigiaihay.com/picture/2020/0520/hoi-nghi-hoa-binh-o-vec-xai-1919-1920.png",
                description: "Dùng để họp đồ án là chính",
                comments: [{
                    userid: 101,
                    content: "Survey cả tháng vẫn chưa xong :((",
                }],
            },
        ],
        comments: [{
            userid: 101,
            content: "Comments",
        }],
    },
    {
        id: 4, /* MoiTruong */
        title: "Tòa nhà B9",
        image: "https://i.postimg.cc/yxLPg2jJ/B9.png",
        description: "Đây là tòa nhà nơi các sinh viên khoa Môi trường và Tài nguyên được giảng dạy",
        latitude: 10.773618917457584,
        longitude: 106.66051443462327,
        rooms: [
            {
                id: 0,
                title: "Văn phòng khoa MT",
                image: "https://img.loigiaihay.com/picture/2020/0520/hoi-nghi-hoa-binh-o-vec-xai-1919-1920.png",
                description: "Chủ yếu được sinh viên dùng để xin giấy xác nhận SV",
                comments: [{
                    userid: 101,
                    content: "Bảo vệ môi trường xanh sạch đẹp là...",
                }],
            },
        ],
        comments: [{
            userid: 101,
            content: "Comments",
        }],
    },
    {
        id: 5, /* QLCN */
        title: "Tòa nhà B10",
        image: "https://i.postimg.cc/Vsg4VbwY/B10.png",
        description: "Đây là tòa nhà nơi các sinh viên khoa Quản lý Công nghiệp được giảng dạy",
        latitude: 10.773949537189104,
        longitude: 106.66119729409864,
        rooms: [
            {
                id: 0,
                title: "Văn phòng khoa QLCN",
                image: "https://img.loigiaihay.com/picture/2020/0520/hoi-nghi-hoa-binh-o-vec-xai-1919-1920.png",
                description: "Chủ yếu được sinh viên dùng để xin giấy xác nhận SV",
                comments: [{
                    userid: 101,
                    content: "Comments",
                }],
            },
        ],
        comments: [{
            userid: 101,
            content: "Comments",
        }],
    },
    {
        id: 6, /* Khoa KHUD */ 
        title: "Tòa nhà B4",
        image: "https://i.postimg.cc/R0tXssS8/B4.png",
        description: "Tòa nhà B4 bao gồm văn phòng khoa Khoa học Ứng dụng, đồng thời là trung tâm ngoại ngữ trường Đại học Bách Khoa.",
        latitude: 10.773154357831288,
        longitude: 106.65879596430831,
        rooms: [
            {
                id: 0,
                title: "Văn phòng khoa KHUD",
                image: "https://img.loigiaihay.com/picture/2020/0520/hoi-nghi-hoa-binh-o-vec-xai-1919-1920.png",
                description: "Chủ yếu được sinh viên dùng để xin giấy xác nhận SV",
                comments: [{
                    userid: 101,
                    content: "Comments",
                }],
            },
        ],
        comments: [{
            userid: 101,
            content: "Comments",
        }],
    },
    {
        id: 7, /* Khoa CNVL */ 
        title: "Tòa nhà C4",
        image: "https://i.postimg.cc/MTxbszrM/C4.png",
        description: "Đây là tòa nhà nơi các sinh viên khoa Công nghệ Vật liệu được giảng dạy",
        latitude: 10.775121262570615,
        longitude: 106.66032678033399,
        rooms: [
            {
                id: 0,
                title: "Văn phòng khoa CNVL",
                image: "https://img.loigiaihay.com/picture/2020/0520/hoi-nghi-hoa-binh-o-vec-xai-1919-1920.png",
                description: "Chủ yếu được sinh viên dùng để xin giấy xác nhận SV",
                comments: [{
                    userid: 101,
                    content: "Comments",
                }],
            },
        ],
        comments: [{
            userid: 101,
            content: "Comments",
        }],
    },
    {
        id: 8, /* Khoa KTGT */
        title: "Tòa nhà C5",
        image: "https://i.postimg.cc/GmWjyFFj/C5.png",
        description: "Đây là tòa nhà nơi các sinh viên khoa Kĩ thuật giao thông được giảng dạy",
        latitude: 10.775398587529782,
        longitude: 106.6601557895161,
        rooms: [
            {
                id: 0,
                title: "văn phòng khoa KTGT",
                image: "https://img.loigiaihay.com/picture/2020/0520/hoi-nghi-hoa-binh-o-vec-xai-1919-1920.png",
                description: "Chủ yếu được sinh viên dùng để xin giấy xác nhận SV",
                comments: [{
                    userid: 101,
                    content: "Có liên kết Việt - Nhật không ạ @^@!",
                }],
            },
        ],
        comments: [{
            userid: 101,
            content: "Comments",
        }],
    },
    {
        id: 9, /* Khoa Dien-DienTu */
        title: "Tòa nhà B1",
        image: "https://i.postimg.cc/XqjLvnfS/B1.png",
        description: "Tòa nhà khoa Điện, là nơi các sinh viên khoa điện bị R Kennen giật mất 1 kỳ",
        latitude: 10.772553929986783,
        longitude: 106.65847622929877,
        rooms: [
            {
                id: 0,
                title: "Văn phòng khoa Điện - Điện tử",
                image: "https://img.loigiaihay.com/picture/2020/0520/hoi-nghi-hoa-binh-o-vec-xai-1919-1920.png",
                description: "Chủ yếu được sinh viên dùng để xin giấy xác nhận SV",
                comments: [{
                    userid: 101,
                    content: "R_120/100/80",
                }],
            },
        ],
        comments: [{
            userid: 101,
            content: "Comments",
        }],
    },
    {
        id: 10, /* Khoa Co Khi */
        title: "Tòa nhà B11",
        image: "https://i.postimg.cc/Qd9bC4Tt/B11.png",
        description: "Đây là văn phòng khoa Cơ khí",
        latitude: 10.774338633960381,
        longitude: 106.6602928567519,
        rooms: [
            {
                id: 0,
                title: "Văn phòng khoa Cơ khí",
                image: "https://img.loigiaihay.com/picture/2020/0520/hoi-nghi-hoa-binh-o-vec-xai-1919-1920.png",
                description: "Chủ yếu được sinh viên dùng để xin giấy xác nhận SV",
                comments: [{
                    userid: 101,
                    content: "Còn cái chân nữa là đủ bộ",
                }, {
                    userid: 102,
                    content: "chân nào",
                }],
            },
        ],
        comments: [{
            userid: 101,
            content: "Comments",
        }],
    },
    {
        id: 11, /* Khoa KTHH */ 
        title: "Tòa nhà B2",
        image: "https://i.postimg.cc/7YPtHn9G/B2.png",
        description: "Đây là tòa nhà nơi các sinh viên khoa hóa được giảng dạy, gồm có nhiều phòng học và phòng thí nghiệm",
        latitude: 10.772090240646936,
        longitude: 106.65944806084154,
        rooms: [
            {
                id: 0,
                title: "Văn phòng khoa KTHH",
                image: "https://img.loigiaihay.com/picture/2020/0520/hoi-nghi-hoa-binh-o-vec-xai-1919-1920.png",
                description: "Chủ yếu được sinh viên dùng để xin giấy xác nhận SV",
                comments: [{
                    userid: 101,
                    content: "H2 + O2 -> HOHO",
                }],
            },
        ],
        comments: [{
            userid: 101,
            content: "Comments",
        }],
    },
    {
        id: 12, /* C1 Xuong Co Khi */ 
        title: "Tòa nhà C1",
        image: "https://i.postimg.cc/hP3sSWh6/C1.png",
        description: "Đây là tòa nhà nơi sihh viên top 4 các khoa cạnh tranh cúp mà pháo thủ không có",
        latitude: 10.774712645032313,
        longitude: 106.6593824745971,
        rooms: [],
        comments: [{
            userid: 101,
            content: "Thiếu cái chân nữa",
        }],
    },
    {
        id: 13, /* A1 */
        title: "Tòa nhà A1",
        image: "https://i.postimg.cc/GtKMP4Lm/A1.png",
        description: "Đây là nơi đặt phòng đào tạo, phòng tổ chức hành chánh của nhà trường",
        latitude: 10.772696918508725,
        longitude: 106.66011770497981,
        rooms: [
            {
                id: 0,
                title: "PDT",
                image: "https://img.loigiaihay.com/picture/2020/0520/hoi-nghi-hoa-binh-o-vec-xai-1919-1920.png",
                description: "Chịu trách nhiệm các việc có liên quan đến học vụ. Có thể đến để xin mở lớp, hủy môn,...",
                comments: [{
                    userid: 101,
                    content: "Cho e xin rút môn CNMT",
                }],
            },
            {
                id: 1,
                title: "Phòng tổ chức hành chính",
                image: "https://img.loigiaihay.com/picture/2020/0520/hoi-nghi-hoa-binh-o-vec-xai-1919-1920.png",
                description: "Tác giả chưa vào nên chưa biết là gì",
                comments: [{
                    userid: 101,
                    content: "Comments",
                }],
            },
        ],
        comments: [{
            userid: 101,
            content: "Comments",
        }],
    },
    {
        id: 14, /* A2 */ 
        title: "Tòa nhà A2",
        image: "https://i.postimg.cc/bws6bYKq/A2.png",
        description: "Thư viện nhưng sau ngày 19/11",
        latitude: 10.773127324084262,
        longitude: 106.66017627562293,
        rooms: [
            {
                id: 0,
                title: "Thư viện",
                image: "https://img.loigiaihay.com/picture/2020/0520/hoi-nghi-hoa-binh-o-vec-xai-1919-1920.png",
                description: "Thư viện, có tài liệu tham khảo và ổ cắm đầy đủ. Một số sinh viên vào để chơi game",
                comments: [{
                    userid: 101,
                    content: "Năm nay ăn 4",
                }],
            },
        ],
        comments: [{
            userid: 101,
            content: "Comments",
        }],
    },
    {
        id: 15, /* A4 */
        title: "Tòa nhà A4",
        image: "https://i.postimg.cc/wjZwk8pL/A4.png",
        description: "Bao gồm: Phòng quản trị thiết bị, Phòng kế hoạch tài chính và trên tầng 4 có khu tự học bao chillz",
        latitude: 10.77341321441384,
        longitude: 106.6600093081139,
        rooms: [
            {
                id: 0,
                title: "Phòng quản trị thiết bị",
                image: "https://img.loigiaihay.com/picture/2020/0520/hoi-nghi-hoa-binh-o-vec-xai-1919-1920.png",
                description: "Phòng để quản trị thiết bị (?)",
                comments: [{
                    userid: 101,
                    content: "Comments",
                }],
            },
            {
                id: 1,
                title: "khu tự học",
                image: "https://img.loigiaihay.com/picture/2020/0520/hoi-nghi-hoa-binh-o-vec-xai-1919-1920.png",
                description: "Khu tự học thật, không dùng để chơi game",
                comments: [{
                    userid: 101,
                    content: "Ổ điện hay bị lỏng",
                }],
            },
        ],
        comments: [{
            userid: 101,
            content: "Comments",
        }],
    },
    {
        id: 16, /* Trung tam ngoai ngu*/
        title: "Tòa nhà C6",
        image: "https://i.postimg.cc/GpvxJ4zn/C6.png",
        description: "Đây là địa điểm học tập chính của trung tâm BK English",
        latitude: 10.775760408678423,
        longitude: 106.66023333413904,
        rooms: [
            {
                id: 0,
                title: "văn phòng BKEnglish",
                image: "https://img.loigiaihay.com/picture/2020/0520/hoi-nghi-hoa-binh-o-vec-xai-1919-1920.png",
                description: "Có thể đăng ký thi Toeic ở đây",
                comments: [{
                    userid: 101,
                    content: "Cho e xin dời ngày thi Toeic",
                }],
            },
        ],
        comments: [{
            userid: 101,
            content: "Comments",
        }],
    },
    {
        id: 17, /* Ho Ca */
        title: "Hồ Cá",
        image: "https://i.postimg.cc/SRxLhD4m/HoCa.png",
        description: "Nằm bên phải lối đi vào từ cổng chính",
        latitude: 10.772198500949976,
        longitude: 106.65840703453672,
        rooms: [],
        comments: [{
            userid: 101,
            content: "Hồ này hình như không chỉ có cá....",
        }],
    },
    {
        id: 18, /* San Van Dong */
        title: "Sân vận động",
        image: "https://i.postimg.cc/Kv47pqQN/San-Van-Dong.png",
        description: "Old Trafford là một sân vận động bóng đá ở Old Trafford, Trafford, Đại Manchester, Vương quốc Anh. Đây là sân nhà của câu lạc bộ bóng đá Manchester United",
        latitude: 10.772661358192673,
        longitude: 106.65939140954688,
        rooms: [],
        comments: [{
            userid: 101,
            content: "Cho e thuê sân ngày 19/12 từ 6:50 đến 9:53",
        }],
    },
    {
        id: 19, /* Cafeteria */
        title: "Cafeteria",
        image: "https://i.postimg.cc/J0YN4Z7Z/Cafeteria.png",
        description: "Cafeteria",
        latitude: 10.775442877031614,
        longitude: 106.65969836941792,
        rooms: [],
        comments: [{
            userid: 101,
            content: "Comments",
        }],
    },
    {
        id: 20, /* Food Court */
        title: "BK Food Court",
        image: "https://i.postimg.cc/J4hKV47j/BKFood-Court.png",
        description: "BK food court, nơi sinh viên và giảng viên trường Đại học Bách khoa ăn uống, sinh hoạt",
        latitude: 10.773527620704261,
        longitude: 106.65875344632589,
        rooms: [],
        comments: [{
            userid: 101,
            content: "Its rawwww",
        }],
    },
    {
        id: 21, /* San bong ro */
        title: "Sân bóng rổ",
        image: "https://i.postimg.cc/k4cNzLkj/BongRo.png",
        description: "Đây là khu vực chơi bóng rổ của sinh viên",
        latitude: 10.774598982405308,
        longitude: 106.65995956211835,
        rooms: [],
        comments: [{
            userid: 101,
            content: "Hanamichi mãi đỉnh",
        }],
    },
    {
        id: 22, /* San bong chuyen */
        title: "Sân bóng chuyền",
        image: "https://i.postimg.cc/J0qvzTS0/Bong-Chuyen.jpg",
        description: "Đây là khu vực chơi bóng chuyền của sinh viên",
        latitude: 10.774241925551202,
        longitude: 106.65997230604457,
        rooms: [],
        comments: [{
            userid: 101,
            content: "Comments",
        }],
    },
];