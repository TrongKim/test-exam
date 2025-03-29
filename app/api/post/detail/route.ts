import { EPostContentType, IPost } from '@/models/post';

export async function GET(request: Request) {
    const posts: IPost[] = [
        {
            id: '1',
            image: '/post.jpg',
            tags: ['Quản lý sản xuất'],
            title: 'Quy trình 5S là gì? Cách ứng dụng hiệu quả nên biết',
            date: '17/11/2022',
            minutes_read: 10,
            author: {
                name: 'FOSO Creator',
                image: '/author.jpg'
            },
            createAt: '13/11/2022',
            updateAt: '17/11/2022',
            banner_post: {
                image: '/post_detail_banner.jpg',
                description: 'Chắc hẳn bạn đã từng nghe qua khái niệm về quy trình 5S là gì? Xây dựng 5S cần yếu tố gì? Bài viết dưới đây của FOSO sẽ trả lời cho bạn thông tin chi tiết về mô hình này cũng như yếu tố tạo nên thành công của quy trình bạn nhé.',
                image_description: 'Quy trình 5s là gì?'
            },
            post_content: [
                {
                    title: 'Quy trình 5S là gì?',
                    content: [
                        {
                            content: 'Quy trình 5S được biết đến là mô hình quản trị tinh gọn trong sản xuất. Nguồn gốc của quy trình 5S là đến từ xứ sở hoa anh đào Nhật Bản. ',
                            type: EPostContentType.NORMAL,
                        },
                        {
                            content: 'Quy trình 5S hiện nay đang được rất nhiều nước trên thế giới vận dụng bởi tính hiệu quả mà 5S mang lại. Quy trình này bao gồm 5 chữ S đầu trong tiếng Nhật:',
                            type: EPostContentType.NORMAL,
                        },
                        {
                            content: ['/Seiri/ (Ngăn nắp)', '/Seiso/ (Sạch sẽ)', '/Seiton/ (Trật tự)', '/Shitsuke/ (Kỷ luật)', '/Seiketsu/ (Tiêu chuẩn hóa)'],
                            type: EPostContentType.LIST,
                        }
                    ]
                },
                {
                    title: 'Lợi ích quy trình 5S đem lại',
                    content: [
                        {
                            content: 'Quy trình 5S được kết hợp từ 5 chữ S và mỗi chữ S thể hiện cho mỗi bước của quy trình với mục đích cải tiến môi trường làm việc của doanh nghiệp. ',
                            type: EPostContentType.NORMAL,
                        },
                        {
                            content: 'Khi doanh nghiệp áp dụng quy trình vào trong tổ chức, doanh nghiệp sẽ tạo nên một môi trường được sắp xếp theo nguyên tắc logic. Nơi làm việc sẽ trở nên sạch sẽ hơn, các công cụ, đồ dùng sẽ được đặt theo vị trí quy định và dễ dàng tìm kiếm khi cần thiết.',
                            type: EPostContentType.NORMAL,
                        },
                        {
                            content: 'Và khi doanh nghiệp áp dụng như vậy cũng hình thành tạo ra thói quen tốt cho mỗi nhân viên. Và từ đó, cũng góp phần vào tạo nên một văn hóa doanh nghiệp tích cực.',
                            type: EPostContentType.NORMAL,
                        }
                    ],
                    image: {
                        url: '/post_detail_2.jpg',
                        description: 'Tại sao doanh nghiệp cần quy trình 5S?'
                    }
                },
                {
                    title: 'Tại sao doanh nghiệp nên áp dụng quy trình 5S?',
                    content: [
                        {
                            content: 'Có thể nói quy trình được áp dụng rộng rãi tại các doanh nghiệp trên toàn thế giới, bao gồm cả Việt Nam. Điều này càng chứng minh rõ nét tính hiệu quả của quy trình đem lại. Sau đây là các lý do vì sao bạn nên lựa chọn quy trình:',
                            type: EPostContentType.NORMAL,
                        },
                        {
                            content: 'Môi trường làm việc tại doanh nghiệp sẽ trở nên sạch sẽ hơn, gọn gàng hơn và có tổ chức hơn. Điều này tạo ra một không gian làm việc hiệu quả cho từng cá nhân trong doanh nghiệp.',
                            type: EPostContentType.NORMAL,
                            mini_title: 'Cải thiện rõ nét môi trường làm việc',
                            index: 1,
                        },
                        {
                            content: 'Khi doanh nghiệp áp dụng quy trình này, doanh nghiệp giảm được thời gian đáng kể khi không còn mất nhiều thời gian tìm kiếm đồ dùng, máy móc cần sử dụng trong quá trình làm việc. Khi mọi thứ đều có trật tự, mọi sự tìm kiếm đều trở nên dễ dàng. ',
                            type: EPostContentType.NORMAL,
                            mini_title: 'Tiết kiệm thời gian đáng kể',
                            index: 2,
                        },
                        {
                            content: 'Nhờ vào quy tắc 5S, bằng cách loại bỏ những thứ không cần thiết, tăng cường sắp xếp và vệ sinh, nhân viên có thể dễ dàng tìm kiếm và sử dụng các dụng cụ, thiết bị và tài liệu, giúp tiết kiệm thời gian và tăng năng suất làm việc.',
                            type: EPostContentType.NORMAL,
                            mini_title: 'Tăng năng suất làm việc',
                            index: 3,
                        },
                        {
                            content: 'Bằng cách tối ưu hóa không gian làm việc, giảm thiểu lãng phí và sử dụng tài nguyên hiệu quả hơn, doanh nghiệp có thể giảm thiểu chi phí vận hành đáng kể cho doanh nghiệp của mình.',
                            type: EPostContentType.NORMAL,
                            mini_title: 'Tiết kiệm chi phí',
                            index: 4,
                        },
                        {
                            content: '5S giúp giữ cho môi trường làm việc luôn sạch sẽ và gọn gàng. Từ đó, giúp tăng cường chất lượng sản phẩm và giảm thiểu lỗi sản xuất không mong muốn.',
                            type: EPostContentType.NORMAL,
                            mini_title: 'Tăng chất lượng sản phẩm',
                            index: 5,
                        }
                    ],
                    image: {
                        url: '/post_detail_3.jpg',
                        description: 'Quy trình 5s gồm các bước'
                    }
                },
                {
                    title: 'Quy trình 5S gồm các bước',
                    content: [
                        {
                            content: '5S là một phương pháp quản lý tổ chức, sắp xếp và tăng cường hiệu quả làm việc trong một tổ chức hoặc doanh nghiệp. 5S bao gồm năm bước cơ bản sau:',
                            type: EPostContentType.NORMAL,
                        },
                        {
                            content: 'Bước đầu tiên trong quy trình là Seiri, mang nghĩa là ngăn nắp, nhằm tổ chức và loại bỏ những thứ dư thừa, không cần thiết để tạo ra một không gian làm việc sạch sẽ, gọn gàng và tiết kiệm thời gian.',
                            type: EPostContentType.NORMAL,
                            mini_title: 'Seiri (Ngăn nắp)',
                            index: 1,
                        },
                        {
                            content: 'Chữ S thứ 2 là Seiton, có nghĩa là sắp xếp các dụng cụ, thiết bị, tài liệu trong doanh nghiệp một cách gọn gàng để giúp tìm kiếm và sử dụng chúng một cách dễ dàng. ',
                            type: EPostContentType.NORMAL,
                            mini_title: 'Seiton (Sắp xếp)',
                            index: 2,
                        },
                        {
                            content: 'Bước tiếp theo trong quy tắc 5S đó là Seiso, trong đó cá nhân trong doanh nghiệp sẽ giữ cho môi trường làm việc luôn sạch sẽ. Và việc vệ sinh thường xuyên như vậy sẽ giúp giảm thiểu sự lây nhiễm bệnh tật và tăng cường sức khỏe cho mỗi nhân viên.',
                            type: EPostContentType.NORMAL,
                            mini_title: 'Seiso (Vệ sinh)',
                            index: 3,
                        },
                        {
                            content: 'Bước kế tiếp đó là Seiketsu, có nghĩa là Tiêu chuẩn hóa. Bước này giúp đặt ra các tiêu chuẩn về sự sạch sẽ, gọn gàng và cách thức sử dụng các dụng cụ, thiết bị, tài liệu.',
                            type: EPostContentType.NORMAL,
                            mini_title: 'Seiketsu (Tiêu chuẩn hóa)',
                            index: 4,
                        },
                        {
                            content: 'Đây được xem là bước cuối cùng trong quy trình. Và bước này đóng vai trò quan trọng trong duy trì tính hiệu quả của quy tắc 5S trong dài hạn. Bước này đòi hỏi việc tạo ra một hệ thống kỷ luật và giám sát chặt chẽ để đảm bảo mọi người trong tổ chức duy trì và tuân thủ theo quy trình.',
                            type: EPostContentType.NORMAL,
                            mini_title: 'Shitsuke (Kỷ luật)',
                            index: 5,
                        }
                    ],
                    image: {
                        url: '/post_detail_4.jpg',
                        description: 'Các bước thực hiện quy trình 5s'
                    }
                },
                {
                    title: 'Quy trình được thực hiện như sau:',
                    content: [
                        {
                            content: 'Có thể nói quy trình được áp dụng rộng rãi tại các doanh nghiệp trên toàn thế giới, bao gồm cả Việt Nam. Điều này càng chứng minh rõ nét tính hiệu quả của quy trình đem lại. Sau đây là các lý do vì sao bạn nên lựa chọn quy trình:',
                            type: EPostContentType.NORMAL,
                        },
                        {
                            content: 'Trong giai đoạn chuẩn bị, doanh nghiệp cần bố trí nhân lực đứng ra điều hành và quản lý quá trình thực hiện quy trình 5S. Việc phân bổ cụ thể như vậy sẽ giúp quá trình áp dụng quy tắc 5S sẽ hiệu quả hơn.',
                            type: EPostContentType.NORMAL,
                            mini_title: 'Giai đoạn chuẩn bị',
                            index: 1,
                        },
                        {
                            content: 'Đầu tiên doanh nghiệp cần chuẩn bị tài liệu, kiến thức về quy trình 5S cho tất cả mọi người trong doanh nghiệp nắm rõ kiến thức cũng như cách áp dụng như thế nào vào doanh nghiệp của bạn.',
                            type: EPostContentType.NORMAL,
                            mini_title: 'Triển khai rộng rãi',
                            index: 2,
                        },
                        {
                            content: 'Đây là bước có thể khiến mọi người không hào hứng trong các bước của quy trình. Doanh nghiệp nên tuyên truyền tích cực và tạo không khí hào hứng cho từng cá nhân.',
                            type: EPostContentType.NORMAL,
                            mini_title: 'Thực hiện vệ sinh toàn bộ doanh nghiệp',
                            index: 3,
                        },
                        {
                            content: 'Đây là bước tiếp theo sau khi đã hoàn thành bước vệ sinh toàn bộ doanh nghiệp. Doanh nghiệp cần đưa ra tiêu chuẩn rõ ràng để việc thực hiện sàng lọc và sắp xếp trở nên khoa học hơn, hiệu quả hơn và dễ dàng tìm kiếm sau này.',
                            type: EPostContentType.NORMAL,
                            mini_title: 'Sàng lọc, sắp xếp và đánh giá',
                            index: 4,
                        },
                        {
                            content: 'Sau khi đã hoàn tất các bước, doanh nghiệp nên tổng kết lại quá trình cải tiến và xem xét cần cải tiến phương diện nào hay không trong quá trình thực hiện quy trình 5S.',
                            type: EPostContentType.NORMAL,
                            mini_title: 'Đánh giá',
                            index: 5,
                        }
                    ],
                },
                {
                    title: 'Quy trình 5S có giống với Kaizen?',
                    content: [
                        {
                            content: 'Vậy câu hỏi đặt ra ở đây là quy trình 5S có giống với Kaizen hay không? Quy trình 5S với Kaizen là 2 khái niệm khác nhau nhưng giữa chúng có mối quan hệ chặt chẽ với nhau.',
                            type: EPostContentType.NORMAL,
                        },
                        {
                            content: 'Về Kaizen, thì đây được xem là một triết lý cải tiến liên tục trong doanh nghiệp. Phương pháp này nhằm tạo ra sự thay đổi tích cực, mang tính liên tục và bền vững. ',
                            type: EPostContentType.SPECIAL,
                        },
                        {
                            content: 'Còn đối với quy tắc 5S, đây là một phương pháp quản lý và cải tiến trong sản xuất. 5S tập trung vào việc sắp xếp, sạch sẽ, sắp đặt, tiêu chuẩn hóa và kỷ luật trong môi trường làm việc. ',
                            type: EPostContentType.SPECIAL,
                        },
                        {
                            content: 'Tuy nhiên, quy trình 5S được xem là một phần của Kaizen. Và quy tắc này đóng vai trò quan trọng trong việc tạo ra môi trường làm việc sạch sẽ, an toàn. Quy tắc 5S thường được sử dụng làm bước đầu tiên trong quá trình cải tiến liên tục của phương pháp Kaizen để tạo ra một nền tảng vững chắc cho các hoạt động cải tiến tiếp theo. ',
                            type: EPostContentType.NORMAL,
                        },
                    ],
                },
                {
                    title: 'Đối tượng nào nên áp dụng 5S?',
                    content: [
                        {
                            content: 'Quy trình 5S được xem là phương pháp quản lý được áp dụng rộng rãi ở nhiều ngành công nghiệp và các loại doanh nghiệp khác nhau. Tuy nhiên, 5S phù hợp đặc biệt cho các doanh nghiệp sản xuất, các cơ quan hành chính, các tổ chức phi lợi nhuận và các doanh nghiệp nhỏ.',
                            type: EPostContentType.NORMAL,
                        },
                        {
                            content: 'Các tổ chức có sự xuất hiện của nhiều nhân viên, hoạt động phức tạp, các trang thiết bị và vật dụng phải được quản lý và sử dụng hiệu quả.',
                            type: EPostContentType.NORMAL,
                        },
                    ],
                    image: {
                        url: '/post_detail_5.jpg',
                        description: 'Các yếu tố tạo nên thành công cho quy trình 5S'
                    }
                },
                {
                    title: 'Các yếu tố tạo nên thành công cho quy trình 5S',
                    content: [
                        {
                            content: 'Và những nhân tố quyết định đến quá trình thành công của quy trình nhằm cải tiến môi trường làm việc của doanh nghiệp đó là từ phía:',
                            type: EPostContentType.NORMAL,
                        },
                        {
                            content: ['Lãnh đạo cởi mở và ủng hộ áp dụng quy trình vào doanh nghiệp. Bởi đây yếu tố quan trọng nhất để quyết định doanh nghiệp có áp dụng quy tắc này hay không.', 'Chương trình, kế hoạch thực hiện quy trình: Sau khi phía lãnh đạo đồng ý, doanh nghiệp cần bộ phận đưa lên ý tưởng, kế hoạch thực hiện triển khai 5S. ', 'Sự tự nguyện tham gia của toàn thể nhân viên: Doanh nghiệp cần huy động và khuyến khích nhân viên tự nguyện thực hiện vì lợi ích chung của tổ chức, của doanh nghiệp.'],
                            type: EPostContentType.NORMAL_LIST,
                        },
                        {
                            content: 'Đồng thời, trên đây là các yếu tố tạo nên sự thành công nhưng cũng là các lưu ý cho mỗi doanh nghiệp cần nắm bắt trước khi bắt tay vào triển khai quy trình 5S vào doanh nghiệp của mình. Và với những thông tin bổ ích như trên, FOSO mong rằng phần nào giúp được doanh nghiệp của bạn phát triển, cải tiến vượt bậc trong tương lai.',
                            type: EPostContentType.NORMAL
                        }
                    ],
                },
            ],
            post_reaction: {
                total: 4,
                like: 1,
                love: 2,
                interest: 0,
                wow: 1,
                boring: 0,
                angry: 0,
                user_reaction: {
                    type: 'like'
                }
            }
        },
        {
            id: '2',
            image: '/post.jpg',
            tags: ['Quản lý sản xuất'],
            title: 'Quy trình 5S là gì? Cách ứng dụng hiệu quả nên biết',
            date: '17/11/2022',
            minutes_read: 10,
            author: {
                name: 'FOSO Creator',
                image: '/author.jpg'
            },
            createAt: '13/11/2022',
            updateAt: '17/11/2022',
            banner_post: {
                image: '/post_detail_banner.jpg',
                description: 'Chắc hẳn bạn đã từng nghe qua khái niệm về quy trình 5S là gì? Xây dựng 5S cần yếu tố gì? Bài viết dưới đây của FOSO sẽ trả lời cho bạn thông tin chi tiết về mô hình này cũng như yếu tố tạo nên thành công của quy trình bạn nhé.',
                image_description: 'Quy trình 5s là gì?'
            },
            post_content: [
                {
                    title: 'Quy trình 5S là gì?',
                    content: [
                        {
                            content: 'Quy trình 5S được biết đến là mô hình quản trị tinh gọn trong sản xuất. Nguồn gốc của quy trình 5S là đến từ xứ sở hoa anh đào Nhật Bản. ',
                            type: EPostContentType.NORMAL,
                        },
                        {
                            content: 'Quy trình 5S hiện nay đang được rất nhiều nước trên thế giới vận dụng bởi tính hiệu quả mà 5S mang lại. Quy trình này bao gồm 5 chữ S đầu trong tiếng Nhật:',
                            type: EPostContentType.NORMAL,
                        },
                        {
                            content: ['/Seiri/ (Ngăn nắp)', '/Seiso/ (Sạch sẽ)', '/Seiton/ (Trật tự)', '/Shitsuke/ (Kỷ luật)', '/Seiketsu/ (Tiêu chuẩn hóa)'],
                            type: EPostContentType.LIST,
                        }
                    ]
                },
                {
                    title: 'Lợi ích quy trình 5S đem lại',
                    content: [
                        {
                            content: 'Quy trình 5S được kết hợp từ 5 chữ S và mỗi chữ S thể hiện cho mỗi bước của quy trình với mục đích cải tiến môi trường làm việc của doanh nghiệp. ',
                            type: EPostContentType.NORMAL,
                        },
                        {
                            content: 'Khi doanh nghiệp áp dụng quy trình vào trong tổ chức, doanh nghiệp sẽ tạo nên một môi trường được sắp xếp theo nguyên tắc logic. Nơi làm việc sẽ trở nên sạch sẽ hơn, các công cụ, đồ dùng sẽ được đặt theo vị trí quy định và dễ dàng tìm kiếm khi cần thiết.',
                            type: EPostContentType.NORMAL,
                        },
                        {
                            content: 'Và khi doanh nghiệp áp dụng như vậy cũng hình thành tạo ra thói quen tốt cho mỗi nhân viên. Và từ đó, cũng góp phần vào tạo nên một văn hóa doanh nghiệp tích cực.',
                            type: EPostContentType.NORMAL,
                        }
                    ],
                    image: {
                        url: '/post_detail_2.jpg',
                        description: 'Tại sao doanh nghiệp cần quy trình 5S?'
                    }
                },
                {
                    title: 'Tại sao doanh nghiệp nên áp dụng quy trình 5S?',
                    content: [
                        {
                            content: 'Có thể nói quy trình được áp dụng rộng rãi tại các doanh nghiệp trên toàn thế giới, bao gồm cả Việt Nam. Điều này càng chứng minh rõ nét tính hiệu quả của quy trình đem lại. Sau đây là các lý do vì sao bạn nên lựa chọn quy trình:',
                            type: EPostContentType.NORMAL,
                        },
                        {
                            content: 'Môi trường làm việc tại doanh nghiệp sẽ trở nên sạch sẽ hơn, gọn gàng hơn và có tổ chức hơn. Điều này tạo ra một không gian làm việc hiệu quả cho từng cá nhân trong doanh nghiệp.',
                            type: EPostContentType.NORMAL,
                            mini_title: 'Cải thiện rõ nét môi trường làm việc',
                            index: 1,
                        },
                        {
                            content: 'Khi doanh nghiệp áp dụng quy trình này, doanh nghiệp giảm được thời gian đáng kể khi không còn mất nhiều thời gian tìm kiếm đồ dùng, máy móc cần sử dụng trong quá trình làm việc. Khi mọi thứ đều có trật tự, mọi sự tìm kiếm đều trở nên dễ dàng. ',
                            type: EPostContentType.NORMAL,
                            mini_title: 'Tiết kiệm thời gian đáng kể',
                            index: 2,
                        },
                        {
                            content: 'Nhờ vào quy tắc 5S, bằng cách loại bỏ những thứ không cần thiết, tăng cường sắp xếp và vệ sinh, nhân viên có thể dễ dàng tìm kiếm và sử dụng các dụng cụ, thiết bị và tài liệu, giúp tiết kiệm thời gian và tăng năng suất làm việc.',
                            type: EPostContentType.NORMAL,
                            mini_title: 'Tăng năng suất làm việc',
                            index: 3,
                        },
                        {
                            content: 'Bằng cách tối ưu hóa không gian làm việc, giảm thiểu lãng phí và sử dụng tài nguyên hiệu quả hơn, doanh nghiệp có thể giảm thiểu chi phí vận hành đáng kể cho doanh nghiệp của mình.',
                            type: EPostContentType.NORMAL,
                            mini_title: 'Tiết kiệm chi phí',
                            index: 4,
                        },
                        {
                            content: '5S giúp giữ cho môi trường làm việc luôn sạch sẽ và gọn gàng. Từ đó, giúp tăng cường chất lượng sản phẩm và giảm thiểu lỗi sản xuất không mong muốn.',
                            type: EPostContentType.NORMAL,
                            mini_title: 'Tăng chất lượng sản phẩm',
                            index: 5,
                        }
                    ],
                    image: {
                        url: '/post_detail_3.jpg',
                        description: 'Quy trình 5s gồm các bước'
                    }
                },
                {
                    title: 'Quy trình 5S gồm các bước',
                    content: [
                        {
                            content: '5S là một phương pháp quản lý tổ chức, sắp xếp và tăng cường hiệu quả làm việc trong một tổ chức hoặc doanh nghiệp. 5S bao gồm năm bước cơ bản sau:',
                            type: EPostContentType.NORMAL,
                        },
                        {
                            content: 'Bước đầu tiên trong quy trình là Seiri, mang nghĩa là ngăn nắp, nhằm tổ chức và loại bỏ những thứ dư thừa, không cần thiết để tạo ra một không gian làm việc sạch sẽ, gọn gàng và tiết kiệm thời gian.',
                            type: EPostContentType.NORMAL,
                            mini_title: 'Seiri (Ngăn nắp)',
                            index: 1,
                        },
                        {
                            content: 'Chữ S thứ 2 là Seiton, có nghĩa là sắp xếp các dụng cụ, thiết bị, tài liệu trong doanh nghiệp một cách gọn gàng để giúp tìm kiếm và sử dụng chúng một cách dễ dàng. ',
                            type: EPostContentType.NORMAL,
                            mini_title: 'Seiton (Sắp xếp)',
                            index: 2,
                        },
                        {
                            content: 'Bước tiếp theo trong quy tắc 5S đó là Seiso, trong đó cá nhân trong doanh nghiệp sẽ giữ cho môi trường làm việc luôn sạch sẽ. Và việc vệ sinh thường xuyên như vậy sẽ giúp giảm thiểu sự lây nhiễm bệnh tật và tăng cường sức khỏe cho mỗi nhân viên.',
                            type: EPostContentType.NORMAL,
                            mini_title: 'Seiso (Vệ sinh)',
                            index: 3,
                        },
                        {
                            content: 'Bước kế tiếp đó là Seiketsu, có nghĩa là Tiêu chuẩn hóa. Bước này giúp đặt ra các tiêu chuẩn về sự sạch sẽ, gọn gàng và cách thức sử dụng các dụng cụ, thiết bị, tài liệu.',
                            type: EPostContentType.NORMAL,
                            mini_title: 'Seiketsu (Tiêu chuẩn hóa)',
                            index: 4,
                        },
                        {
                            content: 'Đây được xem là bước cuối cùng trong quy trình. Và bước này đóng vai trò quan trọng trong duy trì tính hiệu quả của quy tắc 5S trong dài hạn. Bước này đòi hỏi việc tạo ra một hệ thống kỷ luật và giám sát chặt chẽ để đảm bảo mọi người trong tổ chức duy trì và tuân thủ theo quy trình.',
                            type: EPostContentType.NORMAL,
                            mini_title: 'Shitsuke (Kỷ luật)',
                            index: 5,
                        }
                    ],
                    image: {
                        url: '/post_detail_4.jpg',
                        description: 'Các bước thực hiện quy trình 5s'
                    }
                },
                {
                    title: 'Quy trình được thực hiện như sau:',
                    content: [
                        {
                            content: 'Có thể nói quy trình được áp dụng rộng rãi tại các doanh nghiệp trên toàn thế giới, bao gồm cả Việt Nam. Điều này càng chứng minh rõ nét tính hiệu quả của quy trình đem lại. Sau đây là các lý do vì sao bạn nên lựa chọn quy trình:',
                            type: EPostContentType.NORMAL,
                        },
                        {
                            content: 'Trong giai đoạn chuẩn bị, doanh nghiệp cần bố trí nhân lực đứng ra điều hành và quản lý quá trình thực hiện quy trình 5S. Việc phân bổ cụ thể như vậy sẽ giúp quá trình áp dụng quy tắc 5S sẽ hiệu quả hơn.',
                            type: EPostContentType.NORMAL,
                            mini_title: 'Giai đoạn chuẩn bị',
                            index: 1,
                        },
                        {
                            content: 'Đầu tiên doanh nghiệp cần chuẩn bị tài liệu, kiến thức về quy trình 5S cho tất cả mọi người trong doanh nghiệp nắm rõ kiến thức cũng như cách áp dụng như thế nào vào doanh nghiệp của bạn.',
                            type: EPostContentType.NORMAL,
                            mini_title: 'Triển khai rộng rãi',
                            index: 2,
                        },
                        {
                            content: 'Đây là bước có thể khiến mọi người không hào hứng trong các bước của quy trình. Doanh nghiệp nên tuyên truyền tích cực và tạo không khí hào hứng cho từng cá nhân.',
                            type: EPostContentType.NORMAL,
                            mini_title: 'Thực hiện vệ sinh toàn bộ doanh nghiệp',
                            index: 3,
                        },
                        {
                            content: 'Đây là bước tiếp theo sau khi đã hoàn thành bước vệ sinh toàn bộ doanh nghiệp. Doanh nghiệp cần đưa ra tiêu chuẩn rõ ràng để việc thực hiện sàng lọc và sắp xếp trở nên khoa học hơn, hiệu quả hơn và dễ dàng tìm kiếm sau này.',
                            type: EPostContentType.NORMAL,
                            mini_title: 'Sàng lọc, sắp xếp và đánh giá',
                            index: 4,
                        },
                        {
                            content: 'Sau khi đã hoàn tất các bước, doanh nghiệp nên tổng kết lại quá trình cải tiến và xem xét cần cải tiến phương diện nào hay không trong quá trình thực hiện quy trình 5S.',
                            type: EPostContentType.NORMAL,
                            mini_title: 'Đánh giá',
                            index: 5,
                        }
                    ],
                },
                {
                    title: 'Quy trình 5S có giống với Kaizen?',
                    content: [
                        {
                            content: 'Vậy câu hỏi đặt ra ở đây là quy trình 5S có giống với Kaizen hay không? Quy trình 5S với Kaizen là 2 khái niệm khác nhau nhưng giữa chúng có mối quan hệ chặt chẽ với nhau.',
                            type: EPostContentType.NORMAL,
                        },
                        {
                            content: 'Về Kaizen, thì đây được xem là một triết lý cải tiến liên tục trong doanh nghiệp. Phương pháp này nhằm tạo ra sự thay đổi tích cực, mang tính liên tục và bền vững. ',
                            type: EPostContentType.SPECIAL,
                        },
                        {
                            content: 'Còn đối với quy tắc 5S, đây là một phương pháp quản lý và cải tiến trong sản xuất. 5S tập trung vào việc sắp xếp, sạch sẽ, sắp đặt, tiêu chuẩn hóa và kỷ luật trong môi trường làm việc. ',
                            type: EPostContentType.SPECIAL,
                        },
                        {
                            content: 'Tuy nhiên, quy trình 5S được xem là một phần của Kaizen. Và quy tắc này đóng vai trò quan trọng trong việc tạo ra môi trường làm việc sạch sẽ, an toàn. Quy tắc 5S thường được sử dụng làm bước đầu tiên trong quá trình cải tiến liên tục của phương pháp Kaizen để tạo ra một nền tảng vững chắc cho các hoạt động cải tiến tiếp theo. ',
                            type: EPostContentType.NORMAL,
                        },
                    ],
                },
                {
                    title: 'Đối tượng nào nên áp dụng 5S?',
                    content: [
                        {
                            content: 'Quy trình 5S được xem là phương pháp quản lý được áp dụng rộng rãi ở nhiều ngành công nghiệp và các loại doanh nghiệp khác nhau. Tuy nhiên, 5S phù hợp đặc biệt cho các doanh nghiệp sản xuất, các cơ quan hành chính, các tổ chức phi lợi nhuận và các doanh nghiệp nhỏ.',
                            type: EPostContentType.NORMAL,
                        },
                        {
                            content: 'Các tổ chức có sự xuất hiện của nhiều nhân viên, hoạt động phức tạp, các trang thiết bị và vật dụng phải được quản lý và sử dụng hiệu quả.',
                            type: EPostContentType.NORMAL,
                        },
                    ],
                    image: {
                        url: '/post_detail_5.jpg',
                        description: 'Các yếu tố tạo nên thành công cho quy trình 5S'
                    }
                },
                {
                    title: 'Các yếu tố tạo nên thành công cho quy trình 5S',
                    content: [
                        {
                            content: 'Và những nhân tố quyết định đến quá trình thành công của quy trình nhằm cải tiến môi trường làm việc của doanh nghiệp đó là từ phía:',
                            type: EPostContentType.NORMAL,
                        },
                        {
                            content: ['Lãnh đạo cởi mở và ủng hộ áp dụng quy trình vào doanh nghiệp. Bởi đây yếu tố quan trọng nhất để quyết định doanh nghiệp có áp dụng quy tắc này hay không.', 'Chương trình, kế hoạch thực hiện quy trình: Sau khi phía lãnh đạo đồng ý, doanh nghiệp cần bộ phận đưa lên ý tưởng, kế hoạch thực hiện triển khai 5S. ', 'Sự tự nguyện tham gia của toàn thể nhân viên: Doanh nghiệp cần huy động và khuyến khích nhân viên tự nguyện thực hiện vì lợi ích chung của tổ chức, của doanh nghiệp.'],
                            type: EPostContentType.NORMAL_LIST,
                        },
                        {
                            content: 'Đồng thời, trên đây là các yếu tố tạo nên sự thành công nhưng cũng là các lưu ý cho mỗi doanh nghiệp cần nắm bắt trước khi bắt tay vào triển khai quy trình 5S vào doanh nghiệp của mình. Và với những thông tin bổ ích như trên, FOSO mong rằng phần nào giúp được doanh nghiệp của bạn phát triển, cải tiến vượt bậc trong tương lai.',
                            type: EPostContentType.NORMAL
                        }
                    ],
                },
            ],
            post_reaction: {
                total: 4,
                like: 1,
                love: 2,
                interest: 0,
                wow: 1,
                boring: 0,
                angry: 0,
                user_reaction: {
                    type: 'like'
                }
            }
        },
        {
            id: '3',
            image: '/post.jpg',
            tags: ['Quản lý sản xuất'],
            title: 'Quy trình 5S là gì? Cách ứng dụng hiệu quả nên biết',
            date: '17/11/2022',
            minutes_read: 10,
            author: {
                name: 'FOSO Creator',
                image: '/author.jpg'
            },
            createAt: '13/11/2022',
            updateAt: '17/11/2022',
            banner_post: {
                image: '/post_detail_banner.jpg',
                description: 'Chắc hẳn bạn đã từng nghe qua khái niệm về quy trình 5S là gì? Xây dựng 5S cần yếu tố gì? Bài viết dưới đây của FOSO sẽ trả lời cho bạn thông tin chi tiết về mô hình này cũng như yếu tố tạo nên thành công của quy trình bạn nhé.',
                image_description: 'Quy trình 5s là gì?'
            },
            post_content: [
                {
                    title: 'Quy trình 5S là gì?',
                    content: [
                        {
                            content: 'Quy trình 5S được biết đến là mô hình quản trị tinh gọn trong sản xuất. Nguồn gốc của quy trình 5S là đến từ xứ sở hoa anh đào Nhật Bản. ',
                            type: EPostContentType.NORMAL,
                        },
                        {
                            content: 'Quy trình 5S hiện nay đang được rất nhiều nước trên thế giới vận dụng bởi tính hiệu quả mà 5S mang lại. Quy trình này bao gồm 5 chữ S đầu trong tiếng Nhật:',
                            type: EPostContentType.NORMAL,
                        },
                        {
                            content: ['/Seiri/ (Ngăn nắp)', '/Seiso/ (Sạch sẽ)', '/Seiton/ (Trật tự)', '/Shitsuke/ (Kỷ luật)', '/Seiketsu/ (Tiêu chuẩn hóa)'],
                            type: EPostContentType.LIST,
                        }
                    ]
                },
                {
                    title: 'Lợi ích quy trình 5S đem lại',
                    content: [
                        {
                            content: 'Quy trình 5S được kết hợp từ 5 chữ S và mỗi chữ S thể hiện cho mỗi bước của quy trình với mục đích cải tiến môi trường làm việc của doanh nghiệp. ',
                            type: EPostContentType.NORMAL,
                        },
                        {
                            content: 'Khi doanh nghiệp áp dụng quy trình vào trong tổ chức, doanh nghiệp sẽ tạo nên một môi trường được sắp xếp theo nguyên tắc logic. Nơi làm việc sẽ trở nên sạch sẽ hơn, các công cụ, đồ dùng sẽ được đặt theo vị trí quy định và dễ dàng tìm kiếm khi cần thiết.',
                            type: EPostContentType.NORMAL,
                        },
                        {
                            content: 'Và khi doanh nghiệp áp dụng như vậy cũng hình thành tạo ra thói quen tốt cho mỗi nhân viên. Và từ đó, cũng góp phần vào tạo nên một văn hóa doanh nghiệp tích cực.',
                            type: EPostContentType.NORMAL,
                        }
                    ],
                    image: {
                        url: '/post_detail_2.jpg',
                        description: 'Tại sao doanh nghiệp cần quy trình 5S?'
                    }
                },
                {
                    title: 'Tại sao doanh nghiệp nên áp dụng quy trình 5S?',
                    content: [
                        {
                            content: 'Có thể nói quy trình được áp dụng rộng rãi tại các doanh nghiệp trên toàn thế giới, bao gồm cả Việt Nam. Điều này càng chứng minh rõ nét tính hiệu quả của quy trình đem lại. Sau đây là các lý do vì sao bạn nên lựa chọn quy trình:',
                            type: EPostContentType.NORMAL,
                        },
                        {
                            content: 'Môi trường làm việc tại doanh nghiệp sẽ trở nên sạch sẽ hơn, gọn gàng hơn và có tổ chức hơn. Điều này tạo ra một không gian làm việc hiệu quả cho từng cá nhân trong doanh nghiệp.',
                            type: EPostContentType.NORMAL,
                            mini_title: 'Cải thiện rõ nét môi trường làm việc',
                            index: 1,
                        },
                        {
                            content: 'Khi doanh nghiệp áp dụng quy trình này, doanh nghiệp giảm được thời gian đáng kể khi không còn mất nhiều thời gian tìm kiếm đồ dùng, máy móc cần sử dụng trong quá trình làm việc. Khi mọi thứ đều có trật tự, mọi sự tìm kiếm đều trở nên dễ dàng. ',
                            type: EPostContentType.NORMAL,
                            mini_title: 'Tiết kiệm thời gian đáng kể',
                            index: 2,
                        },
                        {
                            content: 'Nhờ vào quy tắc 5S, bằng cách loại bỏ những thứ không cần thiết, tăng cường sắp xếp và vệ sinh, nhân viên có thể dễ dàng tìm kiếm và sử dụng các dụng cụ, thiết bị và tài liệu, giúp tiết kiệm thời gian và tăng năng suất làm việc.',
                            type: EPostContentType.NORMAL,
                            mini_title: 'Tăng năng suất làm việc',
                            index: 3,
                        },
                        {
                            content: 'Bằng cách tối ưu hóa không gian làm việc, giảm thiểu lãng phí và sử dụng tài nguyên hiệu quả hơn, doanh nghiệp có thể giảm thiểu chi phí vận hành đáng kể cho doanh nghiệp của mình.',
                            type: EPostContentType.NORMAL,
                            mini_title: 'Tiết kiệm chi phí',
                            index: 4,
                        },
                        {
                            content: '5S giúp giữ cho môi trường làm việc luôn sạch sẽ và gọn gàng. Từ đó, giúp tăng cường chất lượng sản phẩm và giảm thiểu lỗi sản xuất không mong muốn.',
                            type: EPostContentType.NORMAL,
                            mini_title: 'Tăng chất lượng sản phẩm',
                            index: 5,
                        }
                    ],
                    image: {
                        url: '/post_detail_3.jpg',
                        description: 'Quy trình 5s gồm các bước'
                    }
                },
                {
                    title: 'Quy trình 5S gồm các bước',
                    content: [
                        {
                            content: '5S là một phương pháp quản lý tổ chức, sắp xếp và tăng cường hiệu quả làm việc trong một tổ chức hoặc doanh nghiệp. 5S bao gồm năm bước cơ bản sau:',
                            type: EPostContentType.NORMAL,
                        },
                        {
                            content: 'Bước đầu tiên trong quy trình là Seiri, mang nghĩa là ngăn nắp, nhằm tổ chức và loại bỏ những thứ dư thừa, không cần thiết để tạo ra một không gian làm việc sạch sẽ, gọn gàng và tiết kiệm thời gian.',
                            type: EPostContentType.NORMAL,
                            mini_title: 'Seiri (Ngăn nắp)',
                            index: 1,
                        },
                        {
                            content: 'Chữ S thứ 2 là Seiton, có nghĩa là sắp xếp các dụng cụ, thiết bị, tài liệu trong doanh nghiệp một cách gọn gàng để giúp tìm kiếm và sử dụng chúng một cách dễ dàng. ',
                            type: EPostContentType.NORMAL,
                            mini_title: 'Seiton (Sắp xếp)',
                            index: 2,
                        },
                        {
                            content: 'Bước tiếp theo trong quy tắc 5S đó là Seiso, trong đó cá nhân trong doanh nghiệp sẽ giữ cho môi trường làm việc luôn sạch sẽ. Và việc vệ sinh thường xuyên như vậy sẽ giúp giảm thiểu sự lây nhiễm bệnh tật và tăng cường sức khỏe cho mỗi nhân viên.',
                            type: EPostContentType.NORMAL,
                            mini_title: 'Seiso (Vệ sinh)',
                            index: 3,
                        },
                        {
                            content: 'Bước kế tiếp đó là Seiketsu, có nghĩa là Tiêu chuẩn hóa. Bước này giúp đặt ra các tiêu chuẩn về sự sạch sẽ, gọn gàng và cách thức sử dụng các dụng cụ, thiết bị, tài liệu.',
                            type: EPostContentType.NORMAL,
                            mini_title: 'Seiketsu (Tiêu chuẩn hóa)',
                            index: 4,
                        },
                        {
                            content: 'Đây được xem là bước cuối cùng trong quy trình. Và bước này đóng vai trò quan trọng trong duy trì tính hiệu quả của quy tắc 5S trong dài hạn. Bước này đòi hỏi việc tạo ra một hệ thống kỷ luật và giám sát chặt chẽ để đảm bảo mọi người trong tổ chức duy trì và tuân thủ theo quy trình.',
                            type: EPostContentType.NORMAL,
                            mini_title: 'Shitsuke (Kỷ luật)',
                            index: 5,
                        }
                    ],
                    image: {
                        url: '/post_detail_4.jpg',
                        description: 'Các bước thực hiện quy trình 5s'
                    }
                },
                {
                    title: 'Quy trình được thực hiện như sau:',
                    content: [
                        {
                            content: 'Có thể nói quy trình được áp dụng rộng rãi tại các doanh nghiệp trên toàn thế giới, bao gồm cả Việt Nam. Điều này càng chứng minh rõ nét tính hiệu quả của quy trình đem lại. Sau đây là các lý do vì sao bạn nên lựa chọn quy trình:',
                            type: EPostContentType.NORMAL,
                        },
                        {
                            content: 'Trong giai đoạn chuẩn bị, doanh nghiệp cần bố trí nhân lực đứng ra điều hành và quản lý quá trình thực hiện quy trình 5S. Việc phân bổ cụ thể như vậy sẽ giúp quá trình áp dụng quy tắc 5S sẽ hiệu quả hơn.',
                            type: EPostContentType.NORMAL,
                            mini_title: 'Giai đoạn chuẩn bị',
                            index: 1,
                        },
                        {
                            content: 'Đầu tiên doanh nghiệp cần chuẩn bị tài liệu, kiến thức về quy trình 5S cho tất cả mọi người trong doanh nghiệp nắm rõ kiến thức cũng như cách áp dụng như thế nào vào doanh nghiệp của bạn.',
                            type: EPostContentType.NORMAL,
                            mini_title: 'Triển khai rộng rãi',
                            index: 2,
                        },
                        {
                            content: 'Đây là bước có thể khiến mọi người không hào hứng trong các bước của quy trình. Doanh nghiệp nên tuyên truyền tích cực và tạo không khí hào hứng cho từng cá nhân.',
                            type: EPostContentType.NORMAL,
                            mini_title: 'Thực hiện vệ sinh toàn bộ doanh nghiệp',
                            index: 3,
                        },
                        {
                            content: 'Đây là bước tiếp theo sau khi đã hoàn thành bước vệ sinh toàn bộ doanh nghiệp. Doanh nghiệp cần đưa ra tiêu chuẩn rõ ràng để việc thực hiện sàng lọc và sắp xếp trở nên khoa học hơn, hiệu quả hơn và dễ dàng tìm kiếm sau này.',
                            type: EPostContentType.NORMAL,
                            mini_title: 'Sàng lọc, sắp xếp và đánh giá',
                            index: 4,
                        },
                        {
                            content: 'Sau khi đã hoàn tất các bước, doanh nghiệp nên tổng kết lại quá trình cải tiến và xem xét cần cải tiến phương diện nào hay không trong quá trình thực hiện quy trình 5S.',
                            type: EPostContentType.NORMAL,
                            mini_title: 'Đánh giá',
                            index: 5,
                        }
                    ],
                },
                {
                    title: 'Quy trình 5S có giống với Kaizen?',
                    content: [
                        {
                            content: 'Vậy câu hỏi đặt ra ở đây là quy trình 5S có giống với Kaizen hay không? Quy trình 5S với Kaizen là 2 khái niệm khác nhau nhưng giữa chúng có mối quan hệ chặt chẽ với nhau.',
                            type: EPostContentType.NORMAL,
                        },
                        {
                            content: 'Về Kaizen, thì đây được xem là một triết lý cải tiến liên tục trong doanh nghiệp. Phương pháp này nhằm tạo ra sự thay đổi tích cực, mang tính liên tục và bền vững. ',
                            type: EPostContentType.SPECIAL,
                        },
                        {
                            content: 'Còn đối với quy tắc 5S, đây là một phương pháp quản lý và cải tiến trong sản xuất. 5S tập trung vào việc sắp xếp, sạch sẽ, sắp đặt, tiêu chuẩn hóa và kỷ luật trong môi trường làm việc. ',
                            type: EPostContentType.SPECIAL,
                        },
                        {
                            content: 'Tuy nhiên, quy trình 5S được xem là một phần của Kaizen. Và quy tắc này đóng vai trò quan trọng trong việc tạo ra môi trường làm việc sạch sẽ, an toàn. Quy tắc 5S thường được sử dụng làm bước đầu tiên trong quá trình cải tiến liên tục của phương pháp Kaizen để tạo ra một nền tảng vững chắc cho các hoạt động cải tiến tiếp theo. ',
                            type: EPostContentType.NORMAL,
                        },
                    ],
                },
                {
                    title: 'Đối tượng nào nên áp dụng 5S?',
                    content: [
                        {
                            content: 'Quy trình 5S được xem là phương pháp quản lý được áp dụng rộng rãi ở nhiều ngành công nghiệp và các loại doanh nghiệp khác nhau. Tuy nhiên, 5S phù hợp đặc biệt cho các doanh nghiệp sản xuất, các cơ quan hành chính, các tổ chức phi lợi nhuận và các doanh nghiệp nhỏ.',
                            type: EPostContentType.NORMAL,
                        },
                        {
                            content: 'Các tổ chức có sự xuất hiện của nhiều nhân viên, hoạt động phức tạp, các trang thiết bị và vật dụng phải được quản lý và sử dụng hiệu quả.',
                            type: EPostContentType.NORMAL,
                        },
                    ],
                    image: {
                        url: '/post_detail_5.jpg',
                        description: 'Các yếu tố tạo nên thành công cho quy trình 5S'
                    }
                },
                {
                    title: 'Các yếu tố tạo nên thành công cho quy trình 5S',
                    content: [
                        {
                            content: 'Và những nhân tố quyết định đến quá trình thành công của quy trình nhằm cải tiến môi trường làm việc của doanh nghiệp đó là từ phía:',
                            type: EPostContentType.NORMAL,
                        },
                        {
                            content: ['Lãnh đạo cởi mở và ủng hộ áp dụng quy trình vào doanh nghiệp. Bởi đây yếu tố quan trọng nhất để quyết định doanh nghiệp có áp dụng quy tắc này hay không.', 'Chương trình, kế hoạch thực hiện quy trình: Sau khi phía lãnh đạo đồng ý, doanh nghiệp cần bộ phận đưa lên ý tưởng, kế hoạch thực hiện triển khai 5S. ', 'Sự tự nguyện tham gia của toàn thể nhân viên: Doanh nghiệp cần huy động và khuyến khích nhân viên tự nguyện thực hiện vì lợi ích chung của tổ chức, của doanh nghiệp.'],
                            type: EPostContentType.NORMAL_LIST,
                        },
                        {
                            content: 'Đồng thời, trên đây là các yếu tố tạo nên sự thành công nhưng cũng là các lưu ý cho mỗi doanh nghiệp cần nắm bắt trước khi bắt tay vào triển khai quy trình 5S vào doanh nghiệp của mình. Và với những thông tin bổ ích như trên, FOSO mong rằng phần nào giúp được doanh nghiệp của bạn phát triển, cải tiến vượt bậc trong tương lai.',
                            type: EPostContentType.NORMAL
                        }
                    ],
                },
            ],
            post_reaction: {
                total: 4,
                like: 1,
                love: 2,
                interest: 0,
                wow: 1,
                boring: 0,
                angry: 0,
                user_reaction: {
                    type: 'like'
                }
            }
        },
        {
            id: '4',
            image: '/post.jpg',
            tags: ['Quản lý sản xuất'],
            title: 'Quy trình 5S là gì? Cách ứng dụng hiệu quả nên biết',
            date: '17/11/2022',
            minutes_read: 10,
            author: {
                name: 'FOSO Creator',
                image: '/author.jpg'
            },
            createAt: '13/11/2022',
            updateAt: '17/11/2022',
            banner_post: {
                image: '/post_detail_banner.jpg',
                description: 'Chắc hẳn bạn đã từng nghe qua khái niệm về quy trình 5S là gì? Xây dựng 5S cần yếu tố gì? Bài viết dưới đây của FOSO sẽ trả lời cho bạn thông tin chi tiết về mô hình này cũng như yếu tố tạo nên thành công của quy trình bạn nhé.',
                image_description: 'Quy trình 5s là gì?'
            },
            post_content: [
                {
                    title: 'Quy trình 5S là gì?',
                    content: [
                        {
                            content: 'Quy trình 5S được biết đến là mô hình quản trị tinh gọn trong sản xuất. Nguồn gốc của quy trình 5S là đến từ xứ sở hoa anh đào Nhật Bản. ',
                            type: EPostContentType.NORMAL,
                        },
                        {
                            content: 'Quy trình 5S hiện nay đang được rất nhiều nước trên thế giới vận dụng bởi tính hiệu quả mà 5S mang lại. Quy trình này bao gồm 5 chữ S đầu trong tiếng Nhật:',
                            type: EPostContentType.NORMAL,
                        },
                        {
                            content: ['/Seiri/ (Ngăn nắp)', '/Seiso/ (Sạch sẽ)', '/Seiton/ (Trật tự)', '/Shitsuke/ (Kỷ luật)', '/Seiketsu/ (Tiêu chuẩn hóa)'],
                            type: EPostContentType.LIST,
                        }
                    ]
                },
                {
                    title: 'Lợi ích quy trình 5S đem lại',
                    content: [
                        {
                            content: 'Quy trình 5S được kết hợp từ 5 chữ S và mỗi chữ S thể hiện cho mỗi bước của quy trình với mục đích cải tiến môi trường làm việc của doanh nghiệp. ',
                            type: EPostContentType.NORMAL,
                        },
                        {
                            content: 'Khi doanh nghiệp áp dụng quy trình vào trong tổ chức, doanh nghiệp sẽ tạo nên một môi trường được sắp xếp theo nguyên tắc logic. Nơi làm việc sẽ trở nên sạch sẽ hơn, các công cụ, đồ dùng sẽ được đặt theo vị trí quy định và dễ dàng tìm kiếm khi cần thiết.',
                            type: EPostContentType.NORMAL,
                        },
                        {
                            content: 'Và khi doanh nghiệp áp dụng như vậy cũng hình thành tạo ra thói quen tốt cho mỗi nhân viên. Và từ đó, cũng góp phần vào tạo nên một văn hóa doanh nghiệp tích cực.',
                            type: EPostContentType.NORMAL,
                        }
                    ],
                    image: {
                        url: '/post_detail_2.jpg',
                        description: 'Tại sao doanh nghiệp cần quy trình 5S?'
                    }
                },
                {
                    title: 'Tại sao doanh nghiệp nên áp dụng quy trình 5S?',
                    content: [
                        {
                            content: 'Có thể nói quy trình được áp dụng rộng rãi tại các doanh nghiệp trên toàn thế giới, bao gồm cả Việt Nam. Điều này càng chứng minh rõ nét tính hiệu quả của quy trình đem lại. Sau đây là các lý do vì sao bạn nên lựa chọn quy trình:',
                            type: EPostContentType.NORMAL,
                        },
                        {
                            content: 'Môi trường làm việc tại doanh nghiệp sẽ trở nên sạch sẽ hơn, gọn gàng hơn và có tổ chức hơn. Điều này tạo ra một không gian làm việc hiệu quả cho từng cá nhân trong doanh nghiệp.',
                            type: EPostContentType.NORMAL,
                            mini_title: 'Cải thiện rõ nét môi trường làm việc',
                            index: 1,
                        },
                        {
                            content: 'Khi doanh nghiệp áp dụng quy trình này, doanh nghiệp giảm được thời gian đáng kể khi không còn mất nhiều thời gian tìm kiếm đồ dùng, máy móc cần sử dụng trong quá trình làm việc. Khi mọi thứ đều có trật tự, mọi sự tìm kiếm đều trở nên dễ dàng. ',
                            type: EPostContentType.NORMAL,
                            mini_title: 'Tiết kiệm thời gian đáng kể',
                            index: 2,
                        },
                        {
                            content: 'Nhờ vào quy tắc 5S, bằng cách loại bỏ những thứ không cần thiết, tăng cường sắp xếp và vệ sinh, nhân viên có thể dễ dàng tìm kiếm và sử dụng các dụng cụ, thiết bị và tài liệu, giúp tiết kiệm thời gian và tăng năng suất làm việc.',
                            type: EPostContentType.NORMAL,
                            mini_title: 'Tăng năng suất làm việc',
                            index: 3,
                        },
                        {
                            content: 'Bằng cách tối ưu hóa không gian làm việc, giảm thiểu lãng phí và sử dụng tài nguyên hiệu quả hơn, doanh nghiệp có thể giảm thiểu chi phí vận hành đáng kể cho doanh nghiệp của mình.',
                            type: EPostContentType.NORMAL,
                            mini_title: 'Tiết kiệm chi phí',
                            index: 4,
                        },
                        {
                            content: '5S giúp giữ cho môi trường làm việc luôn sạch sẽ và gọn gàng. Từ đó, giúp tăng cường chất lượng sản phẩm và giảm thiểu lỗi sản xuất không mong muốn.',
                            type: EPostContentType.NORMAL,
                            mini_title: 'Tăng chất lượng sản phẩm',
                            index: 5,
                        }
                    ],
                    image: {
                        url: '/post_detail_3.jpg',
                        description: 'Quy trình 5s gồm các bước'
                    }
                },
                {
                    title: 'Quy trình 5S gồm các bước',
                    content: [
                        {
                            content: '5S là một phương pháp quản lý tổ chức, sắp xếp và tăng cường hiệu quả làm việc trong một tổ chức hoặc doanh nghiệp. 5S bao gồm năm bước cơ bản sau:',
                            type: EPostContentType.NORMAL,
                        },
                        {
                            content: 'Bước đầu tiên trong quy trình là Seiri, mang nghĩa là ngăn nắp, nhằm tổ chức và loại bỏ những thứ dư thừa, không cần thiết để tạo ra một không gian làm việc sạch sẽ, gọn gàng và tiết kiệm thời gian.',
                            type: EPostContentType.NORMAL,
                            mini_title: 'Seiri (Ngăn nắp)',
                            index: 1,
                        },
                        {
                            content: 'Chữ S thứ 2 là Seiton, có nghĩa là sắp xếp các dụng cụ, thiết bị, tài liệu trong doanh nghiệp một cách gọn gàng để giúp tìm kiếm và sử dụng chúng một cách dễ dàng. ',
                            type: EPostContentType.NORMAL,
                            mini_title: 'Seiton (Sắp xếp)',
                            index: 2,
                        },
                        {
                            content: 'Bước tiếp theo trong quy tắc 5S đó là Seiso, trong đó cá nhân trong doanh nghiệp sẽ giữ cho môi trường làm việc luôn sạch sẽ. Và việc vệ sinh thường xuyên như vậy sẽ giúp giảm thiểu sự lây nhiễm bệnh tật và tăng cường sức khỏe cho mỗi nhân viên.',
                            type: EPostContentType.NORMAL,
                            mini_title: 'Seiso (Vệ sinh)',
                            index: 3,
                        },
                        {
                            content: 'Bước kế tiếp đó là Seiketsu, có nghĩa là Tiêu chuẩn hóa. Bước này giúp đặt ra các tiêu chuẩn về sự sạch sẽ, gọn gàng và cách thức sử dụng các dụng cụ, thiết bị, tài liệu.',
                            type: EPostContentType.NORMAL,
                            mini_title: 'Seiketsu (Tiêu chuẩn hóa)',
                            index: 4,
                        },
                        {
                            content: 'Đây được xem là bước cuối cùng trong quy trình. Và bước này đóng vai trò quan trọng trong duy trì tính hiệu quả của quy tắc 5S trong dài hạn. Bước này đòi hỏi việc tạo ra một hệ thống kỷ luật và giám sát chặt chẽ để đảm bảo mọi người trong tổ chức duy trì và tuân thủ theo quy trình.',
                            type: EPostContentType.NORMAL,
                            mini_title: 'Shitsuke (Kỷ luật)',
                            index: 5,
                        }
                    ],
                    image: {
                        url: '/post_detail_4.jpg',
                        description: 'Các bước thực hiện quy trình 5s'
                    }
                },
                {
                    title: 'Quy trình được thực hiện như sau:',
                    content: [
                        {
                            content: 'Có thể nói quy trình được áp dụng rộng rãi tại các doanh nghiệp trên toàn thế giới, bao gồm cả Việt Nam. Điều này càng chứng minh rõ nét tính hiệu quả của quy trình đem lại. Sau đây là các lý do vì sao bạn nên lựa chọn quy trình:',
                            type: EPostContentType.NORMAL,
                        },
                        {
                            content: 'Trong giai đoạn chuẩn bị, doanh nghiệp cần bố trí nhân lực đứng ra điều hành và quản lý quá trình thực hiện quy trình 5S. Việc phân bổ cụ thể như vậy sẽ giúp quá trình áp dụng quy tắc 5S sẽ hiệu quả hơn.',
                            type: EPostContentType.NORMAL,
                            mini_title: 'Giai đoạn chuẩn bị',
                            index: 1,
                        },
                        {
                            content: 'Đầu tiên doanh nghiệp cần chuẩn bị tài liệu, kiến thức về quy trình 5S cho tất cả mọi người trong doanh nghiệp nắm rõ kiến thức cũng như cách áp dụng như thế nào vào doanh nghiệp của bạn.',
                            type: EPostContentType.NORMAL,
                            mini_title: 'Triển khai rộng rãi',
                            index: 2,
                        },
                        {
                            content: 'Đây là bước có thể khiến mọi người không hào hứng trong các bước của quy trình. Doanh nghiệp nên tuyên truyền tích cực và tạo không khí hào hứng cho từng cá nhân.',
                            type: EPostContentType.NORMAL,
                            mini_title: 'Thực hiện vệ sinh toàn bộ doanh nghiệp',
                            index: 3,
                        },
                        {
                            content: 'Đây là bước tiếp theo sau khi đã hoàn thành bước vệ sinh toàn bộ doanh nghiệp. Doanh nghiệp cần đưa ra tiêu chuẩn rõ ràng để việc thực hiện sàng lọc và sắp xếp trở nên khoa học hơn, hiệu quả hơn và dễ dàng tìm kiếm sau này.',
                            type: EPostContentType.NORMAL,
                            mini_title: 'Sàng lọc, sắp xếp và đánh giá',
                            index: 4,
                        },
                        {
                            content: 'Sau khi đã hoàn tất các bước, doanh nghiệp nên tổng kết lại quá trình cải tiến và xem xét cần cải tiến phương diện nào hay không trong quá trình thực hiện quy trình 5S.',
                            type: EPostContentType.NORMAL,
                            mini_title: 'Đánh giá',
                            index: 5,
                        }
                    ],
                },
                {
                    title: 'Quy trình 5S có giống với Kaizen?',
                    content: [
                        {
                            content: 'Vậy câu hỏi đặt ra ở đây là quy trình 5S có giống với Kaizen hay không? Quy trình 5S với Kaizen là 2 khái niệm khác nhau nhưng giữa chúng có mối quan hệ chặt chẽ với nhau.',
                            type: EPostContentType.NORMAL,
                        },
                        {
                            content: 'Về Kaizen, thì đây được xem là một triết lý cải tiến liên tục trong doanh nghiệp. Phương pháp này nhằm tạo ra sự thay đổi tích cực, mang tính liên tục và bền vững. ',
                            type: EPostContentType.SPECIAL,
                        },
                        {
                            content: 'Còn đối với quy tắc 5S, đây là một phương pháp quản lý và cải tiến trong sản xuất. 5S tập trung vào việc sắp xếp, sạch sẽ, sắp đặt, tiêu chuẩn hóa và kỷ luật trong môi trường làm việc. ',
                            type: EPostContentType.SPECIAL,
                        },
                        {
                            content: 'Tuy nhiên, quy trình 5S được xem là một phần của Kaizen. Và quy tắc này đóng vai trò quan trọng trong việc tạo ra môi trường làm việc sạch sẽ, an toàn. Quy tắc 5S thường được sử dụng làm bước đầu tiên trong quá trình cải tiến liên tục của phương pháp Kaizen để tạo ra một nền tảng vững chắc cho các hoạt động cải tiến tiếp theo. ',
                            type: EPostContentType.NORMAL,
                        },
                    ],
                },
                {
                    title: 'Đối tượng nào nên áp dụng 5S?',
                    content: [
                        {
                            content: 'Quy trình 5S được xem là phương pháp quản lý được áp dụng rộng rãi ở nhiều ngành công nghiệp và các loại doanh nghiệp khác nhau. Tuy nhiên, 5S phù hợp đặc biệt cho các doanh nghiệp sản xuất, các cơ quan hành chính, các tổ chức phi lợi nhuận và các doanh nghiệp nhỏ.',
                            type: EPostContentType.NORMAL,
                        },
                        {
                            content: 'Các tổ chức có sự xuất hiện của nhiều nhân viên, hoạt động phức tạp, các trang thiết bị và vật dụng phải được quản lý và sử dụng hiệu quả.',
                            type: EPostContentType.NORMAL,
                        },
                    ],
                    image: {
                        url: '/post_detail_5.jpg',
                        description: 'Các yếu tố tạo nên thành công cho quy trình 5S'
                    }
                },
                {
                    title: 'Các yếu tố tạo nên thành công cho quy trình 5S',
                    content: [
                        {
                            content: 'Và những nhân tố quyết định đến quá trình thành công của quy trình nhằm cải tiến môi trường làm việc của doanh nghiệp đó là từ phía:',
                            type: EPostContentType.NORMAL,
                        },
                        {
                            content: ['Lãnh đạo cởi mở và ủng hộ áp dụng quy trình vào doanh nghiệp. Bởi đây yếu tố quan trọng nhất để quyết định doanh nghiệp có áp dụng quy tắc này hay không.', 'Chương trình, kế hoạch thực hiện quy trình: Sau khi phía lãnh đạo đồng ý, doanh nghiệp cần bộ phận đưa lên ý tưởng, kế hoạch thực hiện triển khai 5S. ', 'Sự tự nguyện tham gia của toàn thể nhân viên: Doanh nghiệp cần huy động và khuyến khích nhân viên tự nguyện thực hiện vì lợi ích chung của tổ chức, của doanh nghiệp.'],
                            type: EPostContentType.NORMAL_LIST,
                        },
                        {
                            content: 'Đồng thời, trên đây là các yếu tố tạo nên sự thành công nhưng cũng là các lưu ý cho mỗi doanh nghiệp cần nắm bắt trước khi bắt tay vào triển khai quy trình 5S vào doanh nghiệp của mình. Và với những thông tin bổ ích như trên, FOSO mong rằng phần nào giúp được doanh nghiệp của bạn phát triển, cải tiến vượt bậc trong tương lai.',
                            type: EPostContentType.NORMAL
                        }
                    ],
                },
            ],
            post_reaction: {
                total: 4,
                like: 1,
                love: 2,
                interest: 0,
                wow: 1,
                boring: 0,
                angry: 0,
                user_reaction: {
                    type: 'like'
                }
            }
        },
    ];
    const url = new URL(request.url);
    
    return new Response(JSON.stringify({
        data: posts.find(post => post.id === url.searchParams.get("postId")),
        status: 200
    }), {
        headers: { "Content-Type": "application/json",  "Cache-Control": "s-maxage=13600, stale-while-revalidate" }
    });
}