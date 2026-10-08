/* 30 câu trắc nghiệm Chương III, lấy từ tài liệu người dùng cung cấp. */
const questionBankSource = [
    {
        "q": "Điểm khác biệt bản chất nhất giữa lưu thông hàng hóa giản đơn (H - T - H) và lưu thông tư bản (T - H - T') là gì?",
        "qEn": "Điểm khác biệt bản chất nhất giữa lưu thông hàng hóa giản đơn (H - T - H) và lưu thông tư bản (T - H - T') là gì?",
        "o": [
            "Lưu thông giản đơn bắt đầu bằng tiền, lưu thông tư bản bắt đầu bằng hàng",
            "Mục đích của H - T - H là giá trị sử dụng; mục đích của T - H - T' là giá trị và giá trị tăng thêm (T')",
            "Lưu thông giản đơn không tuân theo quy luật giá trị, còn lưu thông tư bản thì có",
            "Lưu thông tư bản giới hạn trong phạm vi một quốc gia, lưu thông giản đơn mở rộng toàn cầu"
        ],
        "oEn": [
            "Lưu thông giản đơn bắt đầu bằng tiền, lưu thông tư bản bắt đầu bằng hàng",
            "Mục đích của H - T - H là giá trị sử dụng; mục đích của T - H - T' là giá trị và giá trị tăng thêm (T')",
            "Lưu thông giản đơn không tuân theo quy luật giá trị, còn lưu thông tư bản thì có",
            "Lưu thông tư bản giới hạn trong phạm vi một quốc gia, lưu thông giản đơn mở rộng toàn cầu"
        ],
        "a": 1,
        "e": "Lưu thông hàng hóa giản đơn kết thúc ở giá trị sử dụng để tiêu dùng (H - T - H). Trái lại, lưu thông tư bản xuất phát từ tiền và kết thúc bằng số tiền lớn hơn (T - H - T'), mục đích không phải tiêu dùng mà là sự tăng lên của giá trị.",
        "eEn": "Lưu thông hàng hóa giản đơn kết thúc ở giá trị sử dụng để tiêu dùng (H - T - H). Trái lại, lưu thông tư bản xuất phát từ tiền và kết thúc bằng số tiền lớn hơn (T - H - T'), mục đích không phải tiêu dùng mà là sự tăng lên của giá trị.",
        "tag": [
            "Công thức chung của tư bản",
            "General formula of capital"
        ]
    },
    {
        "q": "Mâu thuẫn trực quan trong Công thức chung của tư bản (T - H - T') nằm ở đâu?",
        "qEn": "Mâu thuẫn trực quan trong Công thức chung của tư bản (T - H - T') nằm ở đâu?",
        "o": [
            "Tiền tự nó đẻ ra tiền khi nằm yên trong két sắt của nhà tư bản",
            "Giá trị thặng dư vừa không thể xuất hiện trong lưu thông, lại vừa không thể xuất hiện ở ngoài lưu thông",
            "Nhà tư bản mua rẻ bán đắt để tạo ra giá trị mới cho toàn xã hội",
            "Người công nhân tự nguyện bán tư liệu sản xuất cho nhà tư bản để lấy tiền mặt"
        ],
        "oEn": [
            "Tiền tự nó đẻ ra tiền khi nằm yên trong két sắt của nhà tư bản",
            "Giá trị thặng dư vừa không thể xuất hiện trong lưu thông, lại vừa không thể xuất hiện ở ngoài lưu thông",
            "Nhà tư bản mua rẻ bán đắt để tạo ra giá trị mới cho toàn xã hội",
            "Người công nhân tự nguyện bán tư liệu sản xuất cho nhà tư bản để lấy tiền mặt"
        ],
        "a": 1,
        "e": "C. Mác chỉ ra: Trong lưu thông (cho dù trao đổi ngang giá hay không ngang giá) đều không tạo ra giá trị mới. Nhưng ngoài lưu thông (không mua bán), tiền không thể tự tăng lên. Đây chính là mâu thuẫn của công thức chung.",
        "eEn": "C. Mác chỉ ra: Trong lưu thông (cho dù trao đổi ngang giá hay không ngang giá) đều không tạo ra giá trị mới. Nhưng ngoài lưu thông (không mua bán), tiền không thể tự tăng lên. Đây chính là mâu thuẫn của công thức chung.",
        "tag": [
            "Công thức chung của tư bản",
            "General formula of capital"
        ]
    },
    {
        "q": "Nếu một nhà tư bản mua hàng hóa đúng giá trị, rồi bán lại hàng hóa đó đúng giá trị trên thị trường thì nhà tư bản đó có thu được giá trị thặng dư không?",
        "qEn": "Nếu một nhà tư bản mua hàng hóa đúng giá trị, rồi bán lại hàng hóa đó đúng giá trị trên thị trường thì nhà tư bản đó có thu được giá trị thặng dư không?",
        "o": [
            "Không, vì trao đổi ngang giá không làm thay đổi tổng giá trị hàng hóa",
            "Có, nếu hàng hóa mua vào là hàng hóa sức lao động",
            "Có, vì thị trường luôn tự động cộng thêm lợi nhuận cho người bán",
            "Không, trừ khi nhà tư bản gian lận hoặc ép giá người tiêu dùng"
        ],
        "oEn": [
            "Không, vì trao đổi ngang giá không làm thay đổi tổng giá trị hàng hóa",
            "Có, nếu hàng hóa mua vào là hàng hóa sức lao động",
            "Có, vì thị trường luôn tự động cộng thêm lợi nhuận cho người bán",
            "Không, trừ khi nhà tư bản gian lận hoặc ép giá người tiêu dùng"
        ],
        "a": 1,
        "e": "Giá trị thặng dư sinh ra không phải do bán đắt hay gian lận, mà do nhà tư bản mua được một hàng hóa đặc biệt là 'sức lao động' đúng giá trị, và khi tiêu dùng hàng hóa này nó tạo ra lượng giá trị mới lớn hơn giá trị bản thân nó.",
        "eEn": "Giá trị thặng dư sinh ra không phải do bán đắt hay gian lận, mà do nhà tư bản mua được một hàng hóa đặc biệt là 'sức lao động' đúng giá trị, và khi tiêu dùng hàng hóa này nó tạo ra lượng giá trị mới lớn hơn giá trị bản thân nó.",
        "tag": [
            "Công thức chung của tư bản",
            "General formula of capital"
        ]
    },
    {
        "q": "Mọi khoản tiền tệ (T) có phải đều đương nhiên trở thành Tư bản không?",
        "qEn": "Mọi khoản tiền tệ (T) có phải đều đương nhiên trở thành Tư bản không?",
        "o": [
            "Đúng, tiền cứ có số lượng lớn là trở thành tư bản",
            "Sai, tiền chỉ trở thành tư bản khi được dùng để mang lại giá trị thặng dư bằng cách bóc lột lao động làm thuê",
            "Đúng, vì tiền là thước đo giá trị cho mọi hàng hóa trong nền kinh tế",
            "Sai, tiền chỉ thành tư bản khi được gởi tiết kiệm vào ngân hàng thu lãi suất"
        ],
        "oEn": [
            "Đúng, tiền cứ có số lượng lớn là trở thành tư bản",
            "Sai, tiền chỉ trở thành tư bản khi được dùng để mang lại giá trị thặng dư bằng cách bóc lột lao động làm thuê",
            "Đúng, vì tiền là thước đo giá trị cho mọi hàng hóa trong nền kinh tế",
            "Sai, tiền chỉ thành tư bản khi được gởi tiết kiệm vào ngân hàng thu lãi suất"
        ],
        "a": 1,
        "e": "Tiền chỉ là tiền thuần túy khi đóng vai trò làm phương tiện lưu thông hoặc thanh toán thông thường. Tiền chỉ biến thành Tư bản khi được sử dụng làm phương tiện để chiếm đoạt giá trị thặng dư do lao động làm thuê tạo ra.",
        "eEn": "Tiền chỉ là tiền thuần túy khi đóng vai trò làm phương tiện lưu thông hoặc thanh toán thông thường. Tiền chỉ biến thành Tư bản khi được sử dụng làm phương tiện để chiếm đoạt giá trị thặng dư do lao động làm thuê tạo ra.",
        "tag": [
            "Công thức chung của tư bản",
            "General formula of capital"
        ]
    },
    {
        "q": "Hiện tượng mua rẻ bán đắt trong lưu thông có tạo ra giá trị thặng dư cho toàn xã hội không?",
        "qEn": "Hiện tượng mua rẻ bán đắt trong lưu thông có tạo ra giá trị thặng dư cho toàn xã hội không?",
        "o": [
            "Có, vì nó làm tăng số tiền trong tay người bán",
            "Không, nó chỉ làm phân phối lại giá trị đã có giữa người bán và người mua, tổng giá trị xã hội không đổi",
            "Có, vì đây là động lực chính để thương nhân mở rộng quy mô kinh doanh",
            "Không, vì mua rẻ bán đắt bị pháp luật nghiêm cấm"
        ],
        "oEn": [
            "Có, vì nó làm tăng số tiền trong tay người bán",
            "Không, nó chỉ làm phân phối lại giá trị đã có giữa người bán và người mua, tổng giá trị xã hội không đổi",
            "Có, vì đây là động lực chính để thương nhân mở rộng quy mô kinh doanh",
            "Không, vì mua rẻ bán đắt bị pháp luật nghiêm cấm"
        ],
        "a": 1,
        "e": "Trao đổi không ngang giá (mua rẻ bán đắt) chỉ làm dịch chuyển giá trị từ túi người này sang túi người khác. Tổng giá trị của toàn xã hội không hề tăng thêm một xu nào.",
        "eEn": "Trao đổi không ngang giá (mua rẻ bán đắt) chỉ làm dịch chuyển giá trị từ túi người này sang túi người khác. Tổng giá trị của toàn xã hội không hề tăng thêm một xu nào.",
        "tag": [
            "Công thức chung của tư bản",
            "General formula of capital"
        ]
    },
    {
        "q": "Để giải quyết mâu thuẫn của công thức chung tư bản, C. Mác đã phát hiện ra chìa khóa nằm ở đâu?",
        "qEn": "Để giải quyết mâu thuẫn của công thức chung tư bản, C. Mác đã phát hiện ra chìa khóa nằm ở đâu?",
        "o": [
            "Việc phát hành tiền giấy của Ngân hàng Trung ương",
            "Việc tìm thấy trên thị trường một hàng hóa có giá trị sử dụng đặc biệt: Hàng hóa Sức lao động",
            "Việc ứng dụng máy móc tự động hóa vào sản xuất công nghiệp",
            "Việc nâng cao kỹ năng gian lận trong thương mại quốc tế"
        ],
        "oEn": [
            "Việc phát hành tiền giấy của Ngân hàng Trung ương",
            "Việc tìm thấy trên thị trường một hàng hóa có giá trị sử dụng đặc biệt: Hàng hóa Sức lao động",
            "Việc ứng dụng máy móc tự động hóa vào sản xuất công nghiệp",
            "Việc nâng cao kỹ năng gian lận trong thương mại quốc tế"
        ],
        "a": 1,
        "e": "Chìa khóa giải quyết mâu thuẫn là tìm thấy trên thị trường một loại hàng hóa mà giá trị sử dụng của nó có thuộc tính kỳ diệu: là nguồn gốc sinh ra giá trị mới lớn hơn giá trị của bản thân nó - đó là Sức lao động.",
        "eEn": "Chìa khóa giải quyết mâu thuẫn là tìm thấy trên thị trường một loại hàng hóa mà giá trị sử dụng của nó có thuộc tính kỳ diệu: là nguồn gốc sinh ra giá trị mới lớn hơn giá trị của bản thân nó - đó là Sức lao động.",
        "tag": [
            "Công thức chung của tư bản",
            "General formula of capital"
        ]
    },
    {
        "q": "Điều kiện nào dưới đây là bắt buộc để Sức lao động trở thành hàng hóa?",
        "qEn": "Điều kiện nào dưới đây là bắt buộc để Sức lao động trở thành hàng hóa?",
        "o": [
            "Người lao động tự do về thân thể nhưng bị tước đoạt tư liệu sản xuất",
            "Người lao động có trình độ đại học trở lên và có máy móc cá nhân",
            "Nhà tư bản bắt buộc người lao động phải làm việc theo giờ",
            "Xã hội phân công lao động thành nông nghiệp và công nghiệp"
        ],
        "oEn": [
            "Người lao động tự do về thân thể nhưng bị tước đoạt tư liệu sản xuất",
            "Người lao động có trình độ đại học trở lên và có máy móc cá nhân",
            "Nhà tư bản bắt buộc người lao động phải làm việc theo giờ",
            "Xã hội phân công lao động thành nông nghiệp và công nghiệp"
        ],
        "a": 0,
        "e": "Sức lao động trở thành hàng hóa khi có đủ 2 điều kiện: (1) Người lao động tự do về thân thể (được quyền bán sức lao động) và (2) Người lao động không có tư liệu sản xuất (buộc phải bán sức lao động để sống).",
        "eEn": "Sức lao động trở thành hàng hóa khi có đủ 2 điều kiện: (1) Người lao động tự do về thân thể (được quyền bán sức lao động) và (2) Người lao động không có tư liệu sản xuất (buộc phải bán sức lao động để sống).",
        "tag": [
            "Hàng hóa sức lao động",
            "Labor-power commodity"
        ]
    },
    {
        "q": "Khái niệm 'Sức lao động' và 'Lao động' khác nhau thế nào trong lý luận của C. Mác?",
        "qEn": "Khái niệm 'Sức lao động' và 'Lao động' khác nhau thế nào trong lý luận của C. Mác?",
        "o": [
            "Sức lao động là khả năng lao động; Lao động là sự tiêu hao sức lao động trong thực tế",
            "Sức lao động do nhà tư bản sở hữu; Lao động do công nhân sở hữu",
            "Sức lao động không có giá trị; Lao động có giá trị rất lớn",
            "Hai khái niệm này hoàn toàn đồng nhất, không có sự khác biệt"
        ],
        "oEn": [
            "Sức lao động là khả năng lao động; Lao động là sự tiêu hao sức lao động trong thực tế",
            "Sức lao động do nhà tư bản sở hữu; Lao động do công nhân sở hữu",
            "Sức lao động không có giá trị; Lao động có giá trị rất lớn",
            "Hai khái niệm này hoàn toàn đồng nhất, không có sự khác biệt"
        ],
        "a": 0,
        "e": "Sức lao động là toàn bộ thể lực và trí lực tồn tại trong con người (tiềm năng). Lao động là quá trình vận dụng sức lao động đó vào thực tế. Cái được bán trên thị trường là Sức lao động chứ không phải Lao động.",
        "eEn": "Sức lao động là toàn bộ thể lực và trí lực tồn tại trong con người (tiềm năng). Lao động là quá trình vận dụng sức lao động đó vào thực tế. Cái được bán trên thị trường là Sức lao động chứ không phải Lao động.",
        "tag": [
            "Hàng hóa sức lao động",
            "Labor-power commodity"
        ]
    },
    {
        "q": "Yếu tố nào sau đây ĐẶC BIỆT làm cho Giá trị hàng hóa Sức lao động khác với hàng hóa thông thường?",
        "qEn": "Yếu tố nào sau đây ĐẶC BIỆT làm cho Giá trị hàng hóa Sức lao động khác với hàng hóa thông thường?",
        "o": [
            "Bao gồm chi phí tư liệu sinh hoạt vật chất để nuôi sống công nhân",
            "Yếu tố tinh thần và yếu tố lịch sử của quốc gia, địa phương đó",
            "Chi phí đào tạo công nhân có tay nghề",
            "Chi phí nuôi sống gia đình người công nhân"
        ],
        "oEn": [
            "Bao gồm chi phí tư liệu sinh hoạt vật chất để nuôi sống công nhân",
            "Yếu tố tinh thần và yếu tố lịch sử của quốc gia, địa phương đó",
            "Chi phí đào tạo công nhân có tay nghề",
            "Chi phí nuôi sống gia đình người công nhân"
        ],
        "a": 1,
        "e": "Giá trị hàng hóa sức lao động ngoài chi phí vật chất còn tái tạo yếu tố tinh thần và bị quy định bởi điều kiện lịch sử, trình độ phát triển và văn hóa của từng quốc gia trong từng thời kỳ.",
        "eEn": "Giá trị hàng hóa sức lao động ngoài chi phí vật chất còn tái tạo yếu tố tinh thần và bị quy định bởi điều kiện lịch sử, trình độ phát triển và văn hóa của từng quốc gia trong từng thời kỳ.",
        "tag": [
            "Hàng hóa sức lao động",
            "Labor-power commodity"
        ]
    },
    {
        "q": "Thuộc tính ĐẶC BIỆT NHẤT của Giá trị sử dụng hàng hóa sức lao động là gì?",
        "qEn": "Thuộc tính ĐẶC BIỆT NHẤT của Giá trị sử dụng hàng hóa sức lao động là gì?",
        "o": [
            "Thỏa mãn nhu cầu ăn, mặc, ở của người công nhân",
            "Khi tiêu dùng, giá trị của nó biến mất hoàn toàn không để lại vết tích",
            "Khi tiêu dùng, nó tạo ra một lượng giá trị mới LỚN HƠN giá trị của bản thân nó",
            "Có thể cất trữ trong kho lâu dài mà không bị hư hỏng"
        ],
        "oEn": [
            "Thỏa mãn nhu cầu ăn, mặc, ở của người công nhân",
            "Khi tiêu dùng, giá trị của nó biến mất hoàn toàn không để lại vết tích",
            "Khi tiêu dùng, nó tạo ra một lượng giá trị mới LỚN HƠN giá trị của bản thân nó",
            "Có thể cất trữ trong kho lâu dài mà không bị hư hỏng"
        ],
        "a": 2,
        "e": "Đây là thuộc tính duy nhất quyết định nguồn gốc của giá trị thặng dư. Trong quá trình lao động, công nhân không chỉ tái tạo lại giá trị sức lao động của mình mà còn tạo thêm phần giá trị thặng dư ($m$) cho nhà tư bản.",
        "eEn": "Đây là thuộc tính duy nhất quyết định nguồn gốc của giá trị thặng dư. Trong quá trình lao động, công nhân không chỉ tái tạo lại giá trị sức lao động của mình mà còn tạo thêm phần giá trị thặng dư ($m$) cho nhà tư bản.",
        "tag": [
            "Hàng hóa sức lao động",
            "Labor-power commodity"
        ]
    },
    {
        "q": "Bản chất thực sự của 'Tiền lương' trong chế độ tư bản chủ nghĩa là gì?",
        "qEn": "Bản chất thực sự của 'Tiền lương' trong chế độ tư bản chủ nghĩa là gì?",
        "o": [
            "Giá cả của Lao động",
            "Giá cả hoặc giá trị của Hàng hóa Sức lao động",
            "Sự chia sẻ lợi nhuận bình đẳng giữa chủ và thợ",
            "Phụ cấp sinh hoạt do nhà nước tư bản quy định"
        ],
        "oEn": [
            "Giá cả của Lao động",
            "Giá cả hoặc giá trị của Hàng hóa Sức lao động",
            "Sự chia sẻ lợi nhuận bình đẳng giữa chủ và thợ",
            "Phụ cấp sinh hoạt do nhà nước tư bản quy định"
        ],
        "a": 1,
        "e": "Tiền lương là biểu hiện bằng tiền của giá trị hàng hóa sức lao động. Nhưng do trả sau khi làm việc, người ta dễ nhầm tưởng tiền lương là 'giá cả của lao động'.",
        "eEn": "Tiền lương là biểu hiện bằng tiền của giá trị hàng hóa sức lao động. Nhưng do trả sau khi làm việc, người ta dễ nhầm tưởng tiền lương là 'giá cả của lao động'.",
        "tag": [
            "Hàng hóa sức lao động",
            "Labor-power commodity"
        ]
    },
    {
        "q": "Vì sao sự nhầm lẫn coi Tiền lương là 'giá cả của lao động' lại có lợi cho nhà tư bản?",
        "qEn": "Vì sao sự nhầm lẫn coi Tiền lương là 'giá cả của lao động' lại có lợi cho nhà tư bản?",
        "o": [
            "Vì nó khiến công nhân đòi tăng lương nhiều hơn",
            "Vì nó xóa mờ ranh giới giữa thời gian lao động tất yếu và thời gian lao động thặng dư, che giấu bản chất bóc lột",
            "Vì nó giúp nhà tư bản không phải đóng thuế cho nhà nước",
            "Vì nó làm cho giá thành sản phẩm giảm xuống"
        ],
        "oEn": [
            "Vì nó khiến công nhân đòi tăng lương nhiều hơn",
            "Vì nó xóa mờ ranh giới giữa thời gian lao động tất yếu và thời gian lao động thặng dư, che giấu bản chất bóc lột",
            "Vì nó giúp nhà tư bản không phải đóng thuế cho nhà nước",
            "Vì nó làm cho giá thành sản phẩm giảm xuống"
        ],
        "a": 1,
        "e": "Nếu coi tiền lương là trả công cho toàn bộ lao động, công nhân sẽ tưởng mọi giờ làm việc đều được trả tiền đầy đủ, làm che giấu việc nhà tư bản chiếm đoạt trắng trợn lao động thặng dư không trả công.",
        "eEn": "Nếu coi tiền lương là trả công cho toàn bộ lao động, công nhân sẽ tưởng mọi giờ làm việc đều được trả tiền đầy đủ, làm che giấu việc nhà tư bản chiếm đoạt trắng trợn lao động thặng dư không trả công.",
        "tag": [
            "Hàng hóa sức lao động",
            "Labor-power commodity"
        ]
    },
    {
        "q": "Trong xã hội tư bản, người công nhân được gọi là 'người lao động tự do', sự 'tự do' này mang bản chất gì?",
        "qEn": "Trong xã hội tư bản, người công nhân được gọi là 'người lao động tự do', sự 'tự do' này mang bản chất gì?",
        "o": [
            "Tự do tuyệt đối, thích làm hay nghỉ tùy ý mà vẫn giàu có",
            "Tự do về pháp lý (thân thể), nhưng bị ép buộc về kinh tế (phải bán sức lao động vì không có tư liệu sản xuất)",
            "Tự do làm chủ các nhà máy, xí nghiệp lớn",
            "Tự do quyết định giá bán sản phẩm do mình làm ra"
        ],
        "oEn": [
            "Tự do tuyệt đối, thích làm hay nghỉ tùy ý mà vẫn giàu có",
            "Tự do về pháp lý (thân thể), nhưng bị ép buộc về kinh tế (phải bán sức lao động vì không có tư liệu sản xuất)",
            "Tự do làm chủ các nhà máy, xí nghiệp lớn",
            "Tự do quyết định giá bán sản phẩm do mình làm ra"
        ],
        "a": 1,
        "e": "Công nhân tự do về mặt pháp luật không bị xiềng xích như nô lệ, nhưng lại 'tự do' không có tài sản/TLSX, buộc phải bán sức lao động cho nhà tư bản nếu không muốn bị đói.",
        "eEn": "Công nhân tự do về mặt pháp luật không bị xiềng xích như nô lệ, nhưng lại 'tự do' không có tài sản/TLSX, buộc phải bán sức lao động cho nhà tư bản nếu không muốn bị đói.",
        "tag": [
            "Hàng hóa sức lao động",
            "Labor-power commodity"
        ]
    },
    {
        "q": "Giá trị hàng hóa sức lao động ĐƯỢC ĐO LƯỜNG gián tiếp bằng yếu tố nào?",
        "qEn": "Giá trị hàng hóa sức lao động ĐƯỢC ĐO LƯỜNG gián tiếp bằng yếu tố nào?",
        "o": [
            "Số lượng máy móc người công nhân điều khiển trong ca làm việc",
            "Giá trị các tư liệu sinh hoạt cần thiết để tái tạo sức lao động của công nhân và nuôi gia đình họ",
            "Mức lợi nhuận mà nhà tư bản thu được trên thị trường",
            "Giá trị sản phẩm do người công nhân đó tạo ra"
        ],
        "oEn": [
            "Số lượng máy móc người công nhân điều khiển trong ca làm việc",
            "Giá trị các tư liệu sinh hoạt cần thiết để tái tạo sức lao động của công nhân và nuôi gia đình họ",
            "Mức lợi nhuận mà nhà tư bản thu được trên thị trường",
            "Giá trị sản phẩm do người công nhân đó tạo ra"
        ],
        "a": 1,
        "e": "Sức lao động tồn tại trong cơ thể con người. Vì vậy giá trị của nó được đo bằng giá trị của lượng tư liệu sinh hoạt cần thiết để duy trì sự sống, sức khỏe và đào tạo người công nhân đó cùng con cái họ.",
        "eEn": "Sức lao động tồn tại trong cơ thể con người. Vì vậy giá trị của nó được đo bằng giá trị của lượng tư liệu sinh hoạt cần thiết để duy trì sự sống, sức khỏe và đào tạo người công nhân đó cùng con cái họ.",
        "tag": [
            "Hàng hóa sức lao động",
            "Labor-power commodity"
        ]
    },
    {
        "q": "Khi nhà tư bản 'tiêu dùng' hàng hóa sức lao động, quá trình đó diễn ra ở đâu?",
        "qEn": "Khi nhà tư bản 'tiêu dùng' hàng hóa sức lao động, quá trình đó diễn ra ở đâu?",
        "o": [
            "Trên thị trường lưu thông công khai",
            "Trong khu vực tiêu dùng cá nhân của người công nhân",
            "Trong nhà xưởng/quá trình sản xuất khép kín của nhà tư bản",
            "Tại các cơ quan dịch vụ việc làm"
        ],
        "oEn": [
            "Trên thị trường lưu thông công khai",
            "Trong khu vực tiêu dùng cá nhân của người công nhân",
            "Trong nhà xưởng/quá trình sản xuất khép kín của nhà tư bản",
            "Tại các cơ quan dịch vụ việc làm"
        ],
        "a": 2,
        "e": "Mua bán sức lao động diễn ra trên thị trường, nhưng việc 'tiêu dùng' sức lao động (cho công nhân làm việc) lại diễn ra trong lĩnh vực sản xuất - nơi bí mật tạo ra giá trị thặng dư.",
        "eEn": "Mua bán sức lao động diễn ra trên thị trường, nhưng việc 'tiêu dùng' sức lao động (cho công nhân làm việc) lại diễn ra trong lĩnh vực sản xuất - nơi bí mật tạo ra giá trị thặng dư.",
        "tag": [
            "Hàng hóa sức lao động",
            "Labor-power commodity"
        ]
    },
    {
        "q": "Quá trình sản xuất tư bản chủ nghĩa là sự thống nhất giữa hai quá trình nào?",
        "qEn": "Quá trình sản xuất tư bản chủ nghĩa là sự thống nhất giữa hai quá trình nào?",
        "o": [
            "Quá trình sản xuất ra giá trị sử dụng và quá trình tạo ra giá trị thặng dư",
            "Quá trình mua bán hàng hóa và quá trình thu thuế của nhà nước",
            "Quá trình trao đổi ngang giá và quá trình trao đổi không ngang giá",
            "Quá trình tích lũy tiền mặt và quá trình xuất khẩu tư bản"
        ],
        "oEn": [
            "Quá trình sản xuất ra giá trị sử dụng và quá trình tạo ra giá trị thặng dư",
            "Quá trình mua bán hàng hóa và quá trình thu thuế của nhà nước",
            "Quá trình trao đổi ngang giá và quá trình trao đổi không ngang giá",
            "Quá trình tích lũy tiền mặt và quá trình xuất khẩu tư bản"
        ],
        "a": 0,
        "e": "Sản xuất TCNH một mặt tạo ra sản phẩm hữu ích (giá trị sử dụng), nhưng mặt quan trọng quyết định là quá trình làm tăng giá trị - tạo ra giá trị thặng dư ($m$).",
        "eEn": "Sản xuất TCNH một mặt tạo ra sản phẩm hữu ích (giá trị sử dụng), nhưng mặt quan trọng quyết định là quá trình làm tăng giá trị - tạo ra giá trị thặng dư ($m$).",
        "tag": [
            "Sản xuất giá trị thặng dư",
            "Surplus-value production"
        ]
    },
    {
        "q": "Ngày lao động của người công nhân trong xí nghiệp tư bản được chia thành hai phần nào?",
        "qEn": "Ngày lao động của người công nhân trong xí nghiệp tư bản được chia thành hai phần nào?",
        "o": [
            "Thời gian lao động ban ngày và Thời gian lao động ban đêm",
            "Thời gian lao động tất yếu và Thời gian lao động thặng dư",
            "Thời gian làm việc chính thức và Thời gian làm thêm giờ (overtime)",
            "Thời gian chuẩn bị máy móc và Thời gian đứng dây chuyền"
        ],
        "oEn": [
            "Thời gian lao động ban ngày và Thời gian lao động ban đêm",
            "Thời gian lao động tất yếu và Thời gian lao động thặng dư",
            "Thời gian làm việc chính thức và Thời gian làm thêm giờ (overtime)",
            "Thời gian chuẩn bị máy móc và Thời gian đứng dây chuyền"
        ],
        "a": 1,
        "e": "Ngày lao động = Thời gian lao động tất yếu (tạo ra giá trị ngang bằng giá trị sức lao động/tiền lương) + Thời gian lao động thặng dư (tạo ra giá trị thặng dư cho nhà tư bản).",
        "eEn": "Ngày lao động = Thời gian lao động tất yếu (tạo ra giá trị ngang bằng giá trị sức lao động/tiền lương) + Thời gian lao động thặng dư (tạo ra giá trị thặng dư cho nhà tư bản).",
        "tag": [
            "Sản xuất giá trị thặng dư",
            "Surplus-value production"
        ]
    },
    {
        "q": "Giá trị thặng dư ($m$) là gì?",
        "qEn": "Giá trị thặng dư ($m$) là gì?",
        "o": [
            "Phần tiền thưởng nhà tư bản trích ra cho công nhân khi bán được hàng",
            "Bộ phận giá trị mới ngoài giá trị sức lao động do công nhân tạo ra và bị nhà tư bản chiếm đoạt không trả công",
            "Khoản chênh lệch do nhà tư bản bán hàng cao hơn giá trị thị trường",
            "Chi phí khấu hao máy móc còn thừa sau một năm sản xuất"
        ],
        "oEn": [
            "Phần tiền thưởng nhà tư bản trích ra cho công nhân khi bán được hàng",
            "Bộ phận giá trị mới ngoài giá trị sức lao động do công nhân tạo ra và bị nhà tư bản chiếm đoạt không trả công",
            "Khoản chênh lệch do nhà tư bản bán hàng cao hơn giá trị thị trường",
            "Chi phí khấu hao máy móc còn thừa sau một năm sản xuất"
        ],
        "a": 1,
        "e": "Giá trị thặng dư là phần giá trị do lao động thặng dư của công nhân tạo ra vượt quá giá trị sức lao động của họ, bị nhà tư bản chiếm đoạt trắng trợn.",
        "eEn": "Giá trị thặng dư là phần giá trị do lao động thặng dư của công nhân tạo ra vượt quá giá trị sức lao động của họ, bị nhà tư bản chiếm đoạt trắng trợn.",
        "tag": [
            "Sản xuất giá trị thặng dư",
            "Surplus-value production"
        ]
    },
    {
        "q": "Nguồn gốc DUY NHẤT tạo ra Giá trị thặng dư ($m$) trong nền kinh tế là gì?",
        "qEn": "Nguồn gốc DUY NHẤT tạo ra Giá trị thặng dư ($m$) trong nền kinh tế là gì?",
        "o": [
            "Máy móc thiết bị tự động hóa hiện đại",
            "Tài nguyên thiên nhiên phong phú",
            "Lao động sống (lao động trừu tượng) của người công nhân làm thuê",
            "Tài năng kinh doanh thiên bẩm của nhà tư bản"
        ],
        "oEn": [
            "Máy móc thiết bị tự động hóa hiện đại",
            "Tài nguyên thiên nhiên phong phú",
            "Lao động sống (lao động trừu tượng) của người công nhân làm thuê",
            "Tài năng kinh doanh thiên bẩm của nhà tư bản"
        ],
        "a": 2,
        "e": "Máy móc hay tư liệu sản xuất chỉ dịch chuyển giá trị cũ. Chỉ có lao động sống của công nhân trong thời gian lao động thặng dư mới sáng tạo ra giá trị mới lớn hơn - giá trị thặng dư.",
        "eEn": "Máy móc hay tư liệu sản xuất chỉ dịch chuyển giá trị cũ. Chỉ có lao động sống của công nhân trong thời gian lao động thặng dư mới sáng tạo ra giá trị mới lớn hơn - giá trị thặng dư.",
        "tag": [
            "Sản xuất giá trị thặng dư",
            "Surplus-value production"
        ]
    },
    {
        "q": "Trong công thức cấu thành giá trị hàng hóa $W = c + v + m$, bộ phận nào đại diện cho Giá trị mới do lao động công nhân tạo ra?",
        "qEn": "Trong công thức cấu thành giá trị hàng hóa $W = c + v + m$, bộ phận nào đại diện cho Giá trị mới do lao động công nhân tạo ra?",
        "o": [
            "$c + v$",
            "$v + m$",
            "$c + m$",
            "Chỉ riêng $c$"
        ],
        "oEn": [
            "$c + v$",
            "$v + m$",
            "$c + m$",
            "Chỉ riêng $c$"
        ],
        "a": 1,
        "e": "Trong quá trình sản xuất, $c$ là giá trị cũ dịch chuyển vào. Bằng lao động trừu tượng, công nhân tạo ra một lượng giá trị mới hoàn toàn bằng $v + m$ (trong đó $v$ bù đắp sức lao động, $m$ là giá trị thặng dư).",
        "eEn": "Trong quá trình sản xuất, $c$ là giá trị cũ dịch chuyển vào. Bằng lao động trừu tượng, công nhân tạo ra một lượng giá trị mới hoàn toàn bằng $v + m$ (trong đó $v$ bù đắp sức lao động, $m$ là giá trị thặng dư).",
        "tag": [
            "Sản xuất giá trị thặng dư",
            "Surplus-value production"
        ]
    },
    {
        "q": "Máy móc, công nghệ hiện đại có vai trò gì trong việc tạo ra giá trị thặng dư?",
        "qEn": "Máy móc, công nghệ hiện đại có vai trò gì trong việc tạo ra giá trị thặng dư?",
        "o": [
            "Trực tiếp tự tạo ra giá trị thặng dư mà không cần con người",
            "Là tiền đề, công cụ giúp tăng năng suất lao động, giúp nhà tư bản bóc lột được nhiều $m$ hơn từ công nhân",
            "Làm giảm hoàn toàn giá trị thặng dư xuống bằng 0",
            "Thay thế hoàn toàn vai trò của nhà tư bản"
        ],
        "oEn": [
            "Trực tiếp tự tạo ra giá trị thặng dư mà không cần con người",
            "Là tiền đề, công cụ giúp tăng năng suất lao động, giúp nhà tư bản bóc lột được nhiều $m$ hơn từ công nhân",
            "Làm giảm hoàn toàn giá trị thặng dư xuống bằng 0",
            "Thay thế hoàn toàn vai trò của nhà tư bản"
        ],
        "a": 1,
        "e": "Máy móc không tự tạo ra giá trị mới; giá trị của nó được chuyển dần vào sản phẩm. Tiến bộ kỹ thuật có thể giúp tăng năng suất và, trong những điều kiện phù hợp, rút ngắn thời gian lao động tất yếu để làm tăng phần lao động thặng dư.",
        "eEn": "Máy móc không tự tạo ra giá trị mới; giá trị của nó được chuyển dần vào sản phẩm. Tiến bộ kỹ thuật có thể giúp tăng năng suất và, trong những điều kiện phù hợp, rút ngắn thời gian lao động tất yếu để làm tăng phần lao động thặng dư.",
        "tag": [
            "Sản xuất giá trị thặng dư",
            "Surplus-value production"
        ]
    },
    {
        "q": "Nếu nhà tư bản kéo dài ngày lao động từ 8 giờ lên 10 giờ trong khi thời gian lao động tất yếu vẫn là 4 giờ thì điều gì sẽ xảy ra?",
        "qEn": "Nếu nhà tư bản kéo dài ngày lao động từ 8 giờ lên 10 giờ trong khi thời gian lao động tất yếu vẫn là 4 giờ thì điều gì sẽ xảy ra?",
        "o": [
            "Tỷ suất giá trị thặng dư giảm xuống",
            "Nhà tư bản áp dụng phương pháp sản xuất giá trị thặng dư tuyệt đối, làm tăng $m$",
            "Thời gian lao động thặng dư giảm đi 2 giờ",
            "Công nhân thu được nhiều giá trị hơn nhà tư bản"
        ],
        "oEn": [
            "Tỷ suất giá trị thặng dư giảm xuống",
            "Nhà tư bản áp dụng phương pháp sản xuất giá trị thặng dư tuyệt đối, làm tăng $m$",
            "Thời gian lao động thặng dư giảm đi 2 giờ",
            "Công nhân thu được nhiều giá trị hơn nhà tư bản"
        ],
        "a": 1,
        "e": "Kéo dài ngày lao động vượt quá thời gian lao động tất yếu trong điều kiện thời gian tất yếu không đổi là phương pháp sản xuất giá trị thặng dư tuyệt đối.",
        "eEn": "Kéo dài ngày lao động vượt quá thời gian lao động tất yếu trong điều kiện thời gian tất yếu không đổi là phương pháp sản xuất giá trị thặng dư tuyệt đối.",
        "tag": [
            "Sản xuất giá trị thặng dư",
            "Surplus-value production"
        ]
    },
    {
        "q": "Tiêu chí nào dưới đây được C. Mác dùng để phân chia Tư bản thành Tư bản bất biến ($c$) và Tư bản khả biến ($v$)?",
        "qEn": "Tiêu chí nào dưới đây được C. Mác dùng để phân chia Tư bản thành Tư bản bất biến ($c$) và Tư bản khả biến ($v$)?",
        "o": [
            "Tốc độ chu chuyển của tư bản nhanh hay chậm",
            "Vai trò của từng bộ phận tư bản trong quá trình tạo ra giá trị thặng dư",
            "Hình thái vật chất của tư bản là cố định hay lưu động",
            "Nguồn gốc tư bản là trong nước hay ngoài nước"
        ],
        "oEn": [
            "Tốc độ chu chuyển của tư bản nhanh hay chậm",
            "Vai trò của từng bộ phận tư bản trong quá trình tạo ra giá trị thặng dư",
            "Hình thái vật chất của tư bản là cố định hay lưu động",
            "Nguồn gốc tư bản là trong nước hay ngoài nước"
        ],
        "a": 1,
        "e": "Mác phân chia $c$ và $v$ căn cứ vào vai trò của chúng trong việc tạo ra $m$: $c$ không thay đổi lượng giá trị, $v$ là bộ phận biến đổi và lớn lên về lượng.",
        "eEn": "Mác phân chia $c$ và $v$ căn cứ vào vai trò của chúng trong việc tạo ra $m$: $c$ không thay đổi lượng giá trị, $v$ là bộ phận biến đổi và lớn lên về lượng.",
        "tag": [
            "Tư bản bất biến và khả biến",
            "Constant and variable capital"
        ]
    },
    {
        "q": "Bộ phận tư bản tồn tại dưới hình thái máy móc, nhà xưởng, nguyên nhiên vật liệu được gọi là gì?",
        "qEn": "Bộ phận tư bản tồn tại dưới hình thái máy móc, nhà xưởng, nguyên nhiên vật liệu được gọi là gì?",
        "o": [
            "Tư bản khả biến ($v$)",
            "Tư bản bất biến ($c$)",
            "Tư bản tiền tệ",
            "Giá trị thặng dư ($m$)"
        ],
        "oEn": [
            "Tư bản khả biến ($v$)",
            "Tư bản bất biến ($c$)",
            "Tư bản tiền tệ",
            "Giá trị thặng dư ($m$)"
        ],
        "a": 1,
        "e": "Giá trị của nhà xưởng, máy móc, nguyên liệu được chuyển dịch nguyên vẹn vào sản phẩm mới, không thay đổi về đại lượng giá trị nên gọi là Tư bản bất biến ($c$).",
        "eEn": "Giá trị của nhà xưởng, máy móc, nguyên liệu được chuyển dịch nguyên vẹn vào sản phẩm mới, không thay đổi về đại lượng giá trị nên gọi là Tư bản bất biến ($c$).",
        "tag": [
            "Tư bản bất biến và khả biến",
            "Constant and variable capital"
        ]
    },
    {
        "q": "Vì sao bộ phận tư bản dùng để mua Hàng hóa sức lao động lại được gọi là Tư bản khả biến ($v$)?",
        "qEn": "Vì sao bộ phận tư bản dùng để mua Hàng hóa sức lao động lại được gọi là Tư bản khả biến ($v$)?",
        "o": [
            "Vì giá cả sức lao động biến động liên tục trên thị trường",
            "Vì trong quá trình sản xuất, giá trị của nó biến đổi về lượng, tăng lên nhờ tạo ra giá trị thặng dư ($m$)",
            "Vì người công nhân có thể dễ dàng nhảy việc sang công ty khác",
            "Vì nhà tư bản có thể quỵt lương công nhân bất cứ lúc nào"
        ],
        "oEn": [
            "Vì giá cả sức lao động biến động liên tục trên thị trường",
            "Vì trong quá trình sản xuất, giá trị của nó biến đổi về lượng, tăng lên nhờ tạo ra giá trị thặng dư ($m$)",
            "Vì người công nhân có thể dễ dàng nhảy việc sang công ty khác",
            "Vì nhà tư bản có thể quỵt lương công nhân bất cứ lúc nào"
        ],
        "a": 1,
        "e": "Bộ phận tư bản mua sức lao động ($v$) thông qua lao động sống của công nhân tạo ra giá trị mới $v + m$. Giá trị này lớn hơn giá trị bản thân $v$, tức là có sự biến đổi/tăng lên về lượng.",
        "eEn": "Bộ phận tư bản mua sức lao động ($v$) thông qua lao động sống của công nhân tạo ra giá trị mới $v + m$. Giá trị này lớn hơn giá trị bản thân $v$, tức là có sự biến đổi/tăng lên về lượng.",
        "tag": [
            "Tư bản bất biến và khả biến",
            "Constant and variable capital"
        ]
    },
    {
        "q": "Sự phân chia Tư bản thành Tư bản bất biến ($c$) và Tư bản khả biến ($v$) có ý nghĩa lý luận quan trọng nhất là gì?",
        "qEn": "Sự phân chia Tư bản thành Tư bản bất biến ($c$) và Tư bản khả biến ($v$) có ý nghĩa lý luận quan trọng nhất là gì?",
        "o": [
            "Vạch trần nguồn gốc thực sự của giá trị thặng dư là do tư bản khả biến ($v$) sinh ra",
            "Giúp nhà tư bản biết cách trốn thuế doanh nghiệp",
            "Giúp phân biệt tài sản cố định và tài sản lưu động trong kế toán",
            "Chứng minh máy móc là yếu tố quyết định sự giàu có"
        ],
        "oEn": [
            "Vạch trần nguồn gốc thực sự của giá trị thặng dư là do tư bản khả biến ($v$) sinh ra",
            "Giúp nhà tư bản biết cách trốn thuế doanh nghiệp",
            "Giúp phân biệt tài sản cố định và tài sản lưu động trong kế toán",
            "Chứng minh máy móc là yếu tố quyết định sự giàu có"
        ],
        "a": 0,
        "e": "Sự phân chia này cho thấy tư bản bất biến (c) chỉ chuyển giá trị cũ vào sản phẩm, còn tư bản khả biến (v) được dùng mua sức lao động. Lao động sống tạo ra giá trị mới v + m, làm rõ nguồn gốc giá trị thặng dư.",
        "eEn": "Sự phân chia này cho thấy tư bản bất biến (c) chỉ chuyển giá trị cũ vào sản phẩm, còn tư bản khả biến (v) được dùng mua sức lao động. Lao động sống tạo ra giá trị mới v + m, làm rõ nguồn gốc giá trị thặng dư.",
        "tag": [
            "Tư bản bất biến và khả biến",
            "Constant and variable capital"
        ]
    },
    {
        "q": "Phản bác lại quan điểm CQ3: 'Nhà tư bản bỏ vốn, công nhân bỏ sức, hai bên hợp tác bình đẳng cùng có lợi nên không có bóc lột', lý luận Mác chỉ ra điểm mấu chốt nào?",
        "qEn": "Phản bác lại quan điểm CQ3: 'Nhà tư bản bỏ vốn, công nhân bỏ sức, hai bên hợp tác bình đẳng cùng có lợi nên không có bóc lột', lý luận Mác chỉ ra điểm mấu chốt nào?",
        "o": [
            "Nhà tư bản hoàn toàn không bỏ vốn mà đi cướp đoạt tiền",
            "Mối quan hệ mua bán trên thị trường là bình đẳng, nhưng trong sản xuất nhà tư bản đã chiếm đoạt phần giá trị thặng dư ngoài tiền lương",
            "Công nhân không nhận được bất kỳ khoản tiền lương nào từ nhà tư bản",
            "Nhà tư bản và công nhân là hai giai cấp hoàn toàn không bao giờ gặp nhau"
        ],
        "oEn": [
            "Nhà tư bản hoàn toàn không bỏ vốn mà đi cướp đoạt tiền",
            "Mối quan hệ mua bán trên thị trường là bình đẳng, nhưng trong sản xuất nhà tư bản đã chiếm đoạt phần giá trị thặng dư ngoài tiền lương",
            "Công nhân không nhận được bất kỳ khoản tiền lương nào từ nhà tư bản",
            "Nhà tư bản và công nhân là hai giai cấp hoàn toàn không bao giờ gặp nhau"
        ],
        "a": 1,
        "e": "Bên ngoài lưu thông, giao dịch mua bán sức lao động có vẻ bình đẳng (thuận mua vừa bán). Nhưng trong sản xuất, nhà tư bản bắt công nhân làm việc nhiều hơn thời gian tất yếu và chiếm đoạt trắng trợn giá trị thặng dư ($m$).",
        "eEn": "Bên ngoài lưu thông, giao dịch mua bán sức lao động có vẻ bình đẳng (thuận mua vừa bán). Nhưng trong sản xuất, nhà tư bản bắt công nhân làm việc nhiều hơn thời gian tất yếu và chiếm đoạt trắng trợn giá trị thặng dư ($m$).",
        "tag": [
            "Bản chất giá trị thặng dư",
            "Nature of surplus value"
        ]
    },
    {
        "q": "Trong nền kinh tế thị trường hiện đại, hình thức biểu hiện bên ngoài nào khiến người ta dễ lầm tưởng rằng 'Tư bản tự nó đẻ ra lợi nhuận'?",
        "qEn": "Trong nền kinh tế thị trường hiện đại, hình thức biểu hiện bên ngoài nào khiến người ta dễ lầm tưởng rằng 'Tư bản tự nó đẻ ra lợi nhuận'?",
        "o": [
            "Tiền lương trả theo sản phẩm",
            "Lợi nhuận ($p$) được tính trên toàn bộ Tư bản ứng trước ($c + v$), làm che giấu nguồn gốc $m$ từ $v$",
            "Sự xuất hiện của các quỹ từ thiện do doanh nhân thành lập",
            "Việc chính phủ thu thuế thu nhập doanh nghiệp"
        ],
        "oEn": [
            "Tiền lương trả theo sản phẩm",
            "Lợi nhuận ($p$) được tính trên toàn bộ Tư bản ứng trước ($c + v$), làm che giấu nguồn gốc $m$ từ $v$",
            "Sự xuất hiện của các quỹ từ thiện do doanh nhân thành lập",
            "Việc chính phủ thu thuế thu nhập doanh nghiệp"
        ],
        "a": 1,
        "e": "Lợi nhuận ($p$) là hình thái biến tướng của $m$, khi so sánh $m$ với toàn bộ tư bản ứng trước ($c + v$). Điều này tạo ra ảo tưởng lợi nhuận do toàn bộ vốn/máy móc sinh ra chứ không phải từ sức lao động.",
        "eEn": "Lợi nhuận ($p$) là hình thái biến tướng của $m$, khi so sánh $m$ với toàn bộ tư bản ứng trước ($c + v$). Điều này tạo ra ảo tưởng lợi nhuận do toàn bộ vốn/máy móc sinh ra chứ không phải từ sức lao động.",
        "tag": [
            "Bản chất giá trị thặng dư",
            "Nature of surplus value"
        ]
    },
    {
        "q": "Sự bóc lột giá trị thặng dư trong chủ nghĩa tư bản khác với sự bóc lột trong chế độ phong kiến hay chiếm hữu nô lệ ở điểm cơ bản nào?",
        "qEn": "Sự bóc lột giá trị thặng dư trong chủ nghĩa tư bản khác với sự bóc lột trong chế độ phong kiến hay chiếm hữu nô lệ ở điểm cơ bản nào?",
        "o": [
            "Bóc lột tư bản chủ nghĩa tàn bạo hơn bằng roi điện và xiềng xích",
            "Bóc lột tư bản chủ nghĩa được ngụy trang tinh vi dưới hình thức hợp đồng kinh tế và quan hệ hàng hóa - tiền tệ 'bình đẳng'",
            "Chế độ phong kiến không có bóc lột",
            "Chế độ chiếm hữu nô lệ trả lương cao hơn chủ nghĩa tư bản"
        ],
        "oEn": [
            "Bóc lột tư bản chủ nghĩa tàn bạo hơn bằng roi điện và xiềng xích",
            "Bóc lột tư bản chủ nghĩa được ngụy trang tinh vi dưới hình thức hợp đồng kinh tế và quan hệ hàng hóa - tiền tệ 'bình đẳng'",
            "Chế độ phong kiến không có bóc lột",
            "Chế độ chiếm hữu nô lệ trả lương cao hơn chủ nghĩa tư bản"
        ],
        "a": 1,
        "e": "Nô lệ và nông nô bị bóc lột bằng cưỡng bức phi kinh tế (bạo lực, luật sang). Tư sản bóc lột bằng cưỡng bức kinh tế ngụy trang dưới hợp đồng lao động tự do, bình đẳng.",
        "eEn": "Nô lệ và nông nô bị bóc lột bằng cưỡng bức phi kinh tế (bạo lực, luật sang). Tư sản bóc lột bằng cưỡng bức kinh tế ngụy trang dưới hợp đồng lao động tự do, bình đẳng.",
        "tag": [
            "Bản chất giá trị thặng dư",
            "Nature of surplus value"
        ]
    },
    {
        "q": "Trong thời đại cách mạng công nghiệp 4.0, khi tự động hóa và Robot thay thế con người ở nhiều công đoạn, bản chất bóc lột giá trị thặng dư có bị triệt tiêu không?",
        "qEn": "Trong thời đại cách mạng công nghiệp 4.0, khi tự động hóa và Robot thay thế con người ở nhiều công đoạn, bản chất bóc lột giá trị thặng dư có bị triệt tiêu không?",
        "o": [
            "Có, vì Robot làm hết công việc nên không còn bóc lột con người",
            "Không, bản chất bóc lột chuyển sang lao động trí tuệ/chất lượng cao; nguồn gốc $m$ vẫn từ lao động sống của công nhân tri thức",
            "Có, vì nhà tư bản phải bỏ nhiều tiền mua Robot nên họ trở thành người bị bóc lột",
            "Không, vì Robot sẽ tự nổi dậy đòi nhận tiền lương"
        ],
        "oEn": [
            "Có, vì Robot làm hết công việc nên không còn bóc lột con người",
            "Không, bản chất bóc lột chuyển sang lao động trí tuệ/chất lượng cao; nguồn gốc $m$ vẫn từ lao động sống của công nhân tri thức",
            "Có, vì nhà tư bản phải bỏ nhiều tiền mua Robot nên họ trở thành người bị bóc lột",
            "Không, vì Robot sẽ tự nổi dậy đòi nhận tiền lương"
        ],
        "a": 1,
        "e": "Robot và máy móc không tự tạo ra giá trị mới mà chuyển giá trị của chúng vào sản phẩm. Tự động hóa không tự xóa bỏ vai trò của lao động sống; trong khuôn khổ lý luận này, giá trị thặng dư vẫn bắt nguồn từ lao động sống, kể cả lao động chuyên môn và trí tuệ.",
        "eEn": "Robot và máy móc không tự tạo ra giá trị mới mà chuyển giá trị của chúng vào sản phẩm. Tự động hóa không tự xóa bỏ vai trò của lao động sống; trong khuôn khổ lý luận này, giá trị thặng dư vẫn bắt nguồn từ lao động sống, kể cả lao động chuyên môn và trí tuệ.",
        "tag": [
            "Bản chất giá trị thặng dư",
            "Nature of surplus value"
        ]
    }
];

const cleanQuizNotation = value => String(value ?? '')
    .replace(/\$\$([\s\S]+?)\$\$/g, '$1')
    .replace(/\$([^$\n]+)\$/g, '$1')
    .replace(/\\\((.*?)\\\)/g, '$1')
    .replace(/\\\[([\s\S]*?)\\\]/g, '$1');

window.questionBank = questionBankSource.map((q, index) => ({
    id: index + 1,
    text: { vi: cleanQuizNotation(q.q), en: cleanQuizNotation(q.qEn) },
    options: {
        vi: q.o.map(cleanQuizNotation),
        en: q.oEn.map(cleanQuizNotation)
    },
    correct: q.a,
    explanation: { vi: cleanQuizNotation(q.e), en: cleanQuizNotation(q.eEn) },
    tag: { vi: cleanQuizNotation(q.tag[0]), en: cleanQuizNotation(q.tag[1]) }
}));
