/* Bộ 30 câu chương II–III, biên soạn theo tài liệu trắc nghiệm được cung cấp. */
const questionBankSource = [
    {
        q: "Một vật phẩm có giá trị sử dụng rất lớn cho con người (như không khí tự nhiên, ánh sáng mặt trời) nhưng vì sao KHÔNG được xem là hàng hóa trong kinh tế chính trị?",
        qEn: "Why are naturally abundant useful things such as air and sunlight not considered commodities in political economy?",
        o: ["Vì không đáp ứng bất kỳ nhu cầu nào của con người", "Vì không thể đem trao đổi, mua bán trên thị trường", "Vì không do lao động của con người tạo ra", "Cả B và C đều đúng."],
        oEn: ["Because they satisfy no human needs", "Because they are not exchanged or sold in a market", "Because they are not produced by human labor", "Both B and C are correct."],
        a: 3,
        e: "Hàng hóa phải đồng thời là sản phẩm của lao động, có ích và được trao đổi, mua bán. Không khí tự nhiên có ích nhưng không do lao động tạo ra và thường không qua trao đổi, nên không phải hàng hóa.",
        eEn: "A commodity must be produced by labor, satisfy a human need, and be exchanged. Natural air is useful, but it is not produced by labor and is generally not exchanged, so it is not a commodity.",
        tag: ["Hàng hóa", "Commodities"]
    },
    {
        q: "Mâu thuẫn giữa hai thuộc tính giá trị sử dụng và giá trị của hàng hóa biểu hiện ở điểm nào?",
        qEn: "How is the contradiction between a commodity's use-value and value expressed?",
        o: ["Giá trị sử dụng khác nhau về chất, còn giá trị đồng nhất về chất là lao động kết tinh", "Giá trị được thực hiện trong lưu thông, còn giá trị sử dụng được thực hiện trong tiêu dùng", "Giá trị sử dụng gắn với thuộc tính tự nhiên, còn giá trị phản ánh quan hệ xã hội", "Cả A, B và C đều đúng."],
        oEn: ["Use-values differ qualitatively, while value is labor embodied in commodities", "Value is realized in circulation, while use-value is realized in consumption", "Use-value relates to natural properties, while value reflects social relations", "A, B, and C are all correct."],
        a: 3,
        e: "Hai thuộc tính khác nhau về bản chất; giá trị được thực hiện trong trao đổi, còn công dụng được thực hiện khi tiêu dùng. Giá trị sử dụng gắn với thuộc tính tự nhiên, còn giá trị phản ánh quan hệ xã hội của lao động.",
        eEn: "The two attributes differ in nature. Value is realized through exchange, while use-value is realized in consumption. Use-value relates to natural properties; value reflects the social relations embodied in labor.",
        tag: ["Thuộc tính hàng hóa", "Commodity attributes"]
    },
    {
        q: "Phát kiến của C. Mác về tính chất hai mặt của lao động sản xuất hàng hóa khẳng định điều gì?",
        qEn: "What does Marx's discovery of the dual character of labor producing commodities establish?",
        o: ["Hàng hóa được tạo ra bởi hai loại lao động độc lập", "Lao động cụ thể tạo ra giá trị, còn lao động trừu tượng tạo ra giá trị sử dụng", "Lao động cụ thể và lao động trừu tượng là hai mặt của cùng một hoạt động lao động", "Lao động cụ thể là phạm trù lịch sử, còn lao động trừu tượng là phạm trù vĩnh viễn."],
        oEn: ["Commodities are produced by two independent kinds of labor", "Concrete labor creates value, while abstract labor creates use-value", "Concrete and abstract labor are two aspects of the same labor activity", "Concrete labor is historical, while abstract labor is permanent."],
        a: 2,
        e: "Không phải hai loại lao động riêng biệt: cùng một lao động sản xuất hàng hóa vừa là lao động cụ thể tạo giá trị sử dụng, vừa là lao động trừu tượng tạo giá trị.",
        eEn: "These are not two separate kinds of labor. The same commodity-producing labor is concrete labor, which creates use-value, and abstract labor, which creates value.",
        tag: ["Lao động hai mặt", "Dual character of labor"]
    },
    {
        q: "Khi năng suất lao động xã hội tăng gấp đôi (các yếu tố khác không đổi), điều gì xảy ra với tổng giá trị tạo ra trong một ngày và giá trị một đơn vị sản phẩm?",
        qEn: "If social labor productivity doubles while other factors remain constant, what happens to total daily value and the value of each unit?",
        o: ["Tổng giá trị tăng gấp đôi, giá trị mỗi đơn vị giảm một nửa", "Tổng giá trị không đổi, giá trị mỗi đơn vị giảm một nửa", "Tổng giá trị tăng gấp đôi, giá trị mỗi đơn vị không đổi", "Cả tổng giá trị và giá trị mỗi đơn vị đều không đổi."],
        oEn: ["Total value doubles and unit value is halved", "Total value is unchanged and unit value is halved", "Total value doubles and unit value is unchanged", "Both total value and unit value are unchanged."],
        a: 1,
        e: "Năng suất tăng làm số sản phẩm trong cùng thời gian tăng lên nhưng không làm tăng tổng lao động đã hao phí. Tổng giá trị vì thế không đổi, còn giá trị mỗi đơn vị giảm tương ứng.",
        eEn: "Higher productivity yields more products in the same time without increasing the total labor expended. Total value stays the same, while value per unit falls proportionally.",
        tag: ["Lượng giá trị", "Magnitude of value"]
    },
    {
        q: "Khác với tăng năng suất lao động, khi tăng cường độ lao động trong cùng một khoảng thời gian thì điều gì xảy ra?",
        qEn: "Unlike higher productivity, what happens when labor intensity rises over the same period of time?",
        o: ["Giá trị mỗi đơn vị sản phẩm giảm tương ứng", "Tổng giá trị tạo ra tăng, còn giá trị mỗi đơn vị không đổi", "Giá trị mỗi đơn vị sản phẩm tăng tương ứng", "Tổng số sản phẩm không thay đổi."],
        oEn: ["Value per unit falls proportionally", "Total value rises while value per unit is unchanged", "Value per unit rises proportionally", "The number of products is unchanged."],
        a: 1,
        e: "Cường độ cao hơn đồng nghĩa hao phí sức lao động nhiều hơn trong cùng thời gian. Tổng sản phẩm và tổng giá trị tăng, nhưng giá trị mỗi đơn vị về cơ bản không đổi.",
        eEn: "Higher intensity means more labor is expended in the same period. The number of products and total value rise, while value per unit remains essentially unchanged.",
        tag: ["Cường độ lao động", "Labor intensity"]
    },
    {
        q: "Tiền tệ trải qua bốn hình thái giá trị trong lịch sử. Bản chất sâu xa của tiền tệ là gì?",
        qEn: "Money developed through four forms of value. What is its underlying nature?",
        o: ["Chứng khoán có giá do ngân hàng trung ương độc quyền phát hành", "Một hàng hóa đặc biệt tách ra làm vật ngang giá chung cho các hàng hóa", "Tài sản kim loại quý chỉ xuất hiện dưới thời phong kiến", "Thước đo quy ước nhân tạo do các quốc gia thỏa thuận."],
        oEn: ["A security issued exclusively by a central bank", "A special commodity that serves as the universal equivalent", "A precious metal asset found only in feudal times", "An artificial measure agreed upon by states."],
        a: 1,
        e: "Theo C. Mác, tiền tệ hình thành cùng sự phát triển của sản xuất và trao đổi hàng hóa. Bản chất của nó là hàng hóa đặc biệt giữ vai trò vật ngang giá chung.",
        eEn: "According to Marx, money emerged as commodity production and exchange developed. Its nature is that of a special commodity serving as the universal equivalent.",
        tag: ["Bản chất tiền tệ", "Nature of money"]
    },
    {
        q: "Khi tiền thực hiện chức năng thước đo giá trị, điều kiện nào là đúng?",
        qEn: "When money functions as a measure of value, which statement is correct?",
        o: ["Phải có tiền mặt thực tế trên tay", "Không cần tiền mặt thực tế; chỉ cần lượng tiền được hình dung để biểu hiện giá cả", "Phải chuyển khoản qua ngân hàng", "Phải dùng vàng nguyên chất đủ giá trị."],
        oEn: ["Physical cash must be present", "Physical cash is unnecessary; an imagined amount can express the price", "A bank transfer is required", "Full-value pure gold must be used."],
        a: 1,
        e: "Để biểu hiện giá trị hàng hóa thành giá cả, tiền chỉ cần tồn tại trong ý niệm; chưa cần có trao đổi tiền mặt thực tế.",
        eEn: "To express a commodity's value as a price, money need only be imagined; an actual cash exchange is not required.",
        tag: ["Chức năng tiền", "Functions of money"]
    },
    {
        q: "Hành vi mua bán chịu (giao hàng trước, trả tiền sau) gắn với chức năng nào của tiền tệ?",
        qEn: "Which function of money is associated with credit sales, where goods are delivered before payment?",
        o: ["Phương tiện lưu thông", "Phương tiện cất trữ", "Phương tiện thanh toán", "Tiền thế giới."],
        oEn: ["Medium of circulation", "Store of value", "Means of payment", "World money."],
        a: 2,
        e: "Trong mua bán chịu, tiền được dùng để thanh toán sau khi giao dịch đã diễn ra, nên đảm nhiệm chức năng phương tiện thanh toán.",
        eEn: "In a credit sale, money is paid after the transaction, so it functions as a means of payment.",
        tag: ["Chức năng tiền", "Functions of money"]
    },
    {
        q: "Biểu hiện bề ngoài rõ nhất của lạm phát trong nền kinh tế thị trường là gì?",
        qEn: "What is the clearest outward sign of inflation in a market economy?",
        o: ["Mặt bằng giá chung tăng, sức mua của đồng tiền giảm", "Lượng tiền giấy lưu thông thấp hơn lượng cần thiết", "Giá trị hàng hóa tăng đột biến do chi phí sản xuất", "Doanh nghiệp mở rộng sản xuất vì hàng hóa hạ giá."],
        oEn: ["The general price level rises and money loses purchasing power", "The amount of paper money in circulation is below what is needed", "Commodity value rises sharply due to production costs", "Businesses expand because goods become cheaper."],
        a: 0,
        e: "Lạm phát biểu hiện ở sự tăng lên của mặt bằng giá chung và sự suy giảm sức mua của tiền. Trong lý luận tiền tệ, phát hành tiền giấy vượt nhu cầu lưu thông là một nguyên nhân có thể dẫn đến tình trạng này.",
        eEn: "Inflation is reflected in a rising general price level and declining purchasing power. In monetary theory, issuing more paper money than circulation requires can be one cause.",
        tag: ["Lạm phát", "Inflation"]
    },
    {
        q: "Quy luật giá trị yêu cầu sản xuất và trao đổi hàng hóa dựa trên cơ sở nào?",
        qEn: "What is the basis for production and exchange under the law of value?",
        o: ["Thời gian lao động cá biệt của người sản xuất giỏi nhất", "Hao phí lao động xã hội cần thiết", "Nhu cầu riêng của người mua", "Chi phí nguyên vật liệu đầu vào."],
        oEn: ["The individual labor time of the most efficient producer", "Socially necessary labor expenditure", "Each buyer's personal demand", "The cost of input materials."],
        a: 1,
        e: "Quy luật giá trị đòi hỏi sản xuất và trao đổi dựa trên hao phí lao động xã hội cần thiết, tức thời gian lao động trung bình cần có trong điều kiện sản xuất bình thường.",
        eEn: "The law of value requires production and exchange to reflect socially necessary labor expenditure: the average labor time needed under normal conditions.",
        tag: ["Quy luật giá trị", "Law of value"]
    },
    {
        q: "Khi cung nhỏ hơn cầu và hàng hóa khan hiếm, giá cả thị trường thường quan hệ thế nào với giá trị hàng hóa?",
        qEn: "When supply is below demand and goods are scarce, how does market price generally relate to value?",
        o: ["Giá cả thấp hơn giá trị", "Giá cả cao hơn giá trị", "Giá cả luôn bằng giá trị", "Giá trị hàng hóa tự động giảm."],
        oEn: ["Price is below value", "Price is above value", "Price always equals value", "The commodity's value automatically falls."],
        a: 1,
        e: "Khi cầu vượt cung, người mua cạnh tranh để có hàng, thường đẩy giá thị trường lên cao hơn giá trị.",
        eEn: "When demand exceeds supply, buyers compete for scarce goods, generally pushing market prices above value.",
        tag: ["Cung cầu", "Supply and demand"]
    },
    {
        q: "Bên cạnh tác động tích cực, mặt tiêu cực nổi bật của cạnh tranh trong kinh tế thị trường là gì?",
        qEn: "Alongside its positive effects, what is a major harmful consequence of competition in a market economy?",
        o: ["Kích thích cải tiến kỹ thuật và tăng năng suất", "Có thể dẫn đến cạnh tranh không lành mạnh, hàng giả, trốn thuế, tổn hại môi trường và phân hóa giàu nghèo", "Buộc các chủ thể năng động hơn", "Làm giá cả xoay quanh giá cả sản xuất."],
        oEn: ["It stimulates technical improvements and productivity", "It can encourage unfair practices, counterfeit goods, tax evasion, environmental damage, and inequality", "It pushes economic actors to be more dynamic", "It makes prices fluctuate around production prices."],
        a: 1,
        e: "Cạnh tranh có thể thúc đẩy đổi mới, nhưng cũng có thể kéo theo thủ đoạn bất chính, vi phạm pháp luật, tổn hại môi trường và gia tăng phân hóa giàu nghèo.",
        eEn: "Competition can drive innovation, but it can also encourage unlawful conduct, environmental harm, and greater inequality.",
        tag: ["Cạnh tranh", "Competition"]
    },
    {
        q: "Chủ thể nào đóng vai trò cầu nối giữa người sản xuất và người tiêu dùng, giúp thị trường vận hành thông suốt?",
        qEn: "Which actors connect producers and consumers and help markets operate smoothly?",
        o: ["Nhà nước", "Các chủ thể trung gian như thương nhân, môi giới, ngân hàng và sàn giao dịch", "Người lao động làm thuê", "Người tiêu dùng cuối cùng."],
        oEn: ["The state", "Intermediaries such as merchants, brokers, banks, and exchanges", "Wage workers", "Final consumers."],
        a: 1,
        e: "Các chủ thể trung gian kết nối cung với cầu, hỗ trợ giao dịch và giúp hàng hóa, vốn, thông tin lưu chuyển trên thị trường.",
        eEn: "Market intermediaries connect supply and demand, facilitate transactions, and help goods, capital, and information circulate.",
        tag: ["Chủ thể trung gian", "Intermediaries"]
    },
    {
        q: "Vai trò kinh tế vĩ mô quan trọng của Nhà nước trong nền kinh tế thị trường định hướng xã hội chủ nghĩa là gì?",
        qEn: "What is an important macroeconomic role of the state in a socialist-oriented market economy?",
        o: ["Định giá trực tiếp mọi mặt hàng tiêu dùng", "Kiến tạo pháp lý, điều tiết vĩ mô, định hướng và khắc phục khiếm khuyết thị trường", "Trực tiếp sản xuất và phân phối toàn bộ của cải", "Thay thế hoàn toàn các quy luật kinh tế."],
        oEn: ["Set prices directly for all consumer goods", "Build the legal framework, regulate the macroeconomy, set direction, and address market failures", "Produce and distribute all social wealth directly", "Replace all economic laws entirely."],
        a: 1,
        e: "Nhà nước xây dựng thể chế, ban hành chính sách, định hướng phát triển và xử lý những vấn đề thị trường không tự giải quyết tốt, như ô nhiễm và bất bình đẳng.",
        eEn: "The state builds institutions, sets policy and direction, and addresses problems markets may not resolve well, such as pollution and inequality.",
        tag: ["Vai trò Nhà nước", "Role of the state"]
    },
    {
        q: "Mâu thuẫn cơ bản của nền sản xuất hàng hóa, có thể dẫn đến khủng hoảng, là mâu thuẫn giữa những yếu tố nào?",
        qEn: "Which contradiction is fundamental to commodity production and can contribute to crises?",
        o: ["Giá trị sử dụng và giá trị trao đổi", "Lao động tư nhân và lao động xã hội", "Lao động cụ thể và lao động quá khứ", "Người mua và người bán."],
        oEn: ["Use-value and exchange-value", "Private labor and social labor", "Concrete labor and past labor", "Buyers and sellers."],
        a: 1,
        e: "Người sản xuất tự quyết định việc làm riêng của mình, nhưng sản phẩm phải được xã hội chấp nhận. Mâu thuẫn giữa tính tư nhân và tính xã hội của lao động là mâu thuẫn cơ bản của sản xuất hàng hóa.",
        eEn: "Producers make private decisions, yet society must accept their products. The contradiction between the private and social character of labor is fundamental to commodity production.",
        tag: ["Mâu thuẫn sản xuất", "Production contradiction"]
    },
    {
        q: "Tích truyện vua Midas ước mọi thứ chạm vào đều biến thành vàng gợi ra bài học kinh tế chính trị nào?",
        qEn: "What political-economy lesson is illustrated by the story of King Midas, whose touch turned everything to gold?",
        o: ["Vàng là hình thái duy nhất tạo nên phát triển bền vững", "Sự giàu có nằm ở hàng hóa, dịch vụ đáp ứng nhu cầu, không chỉ ở tiền hay vàng tích trữ", "Càng nhiều vàng thì người dân càng hạnh phúc", "Vàng không có thuộc tính của hàng hóa."],
        oEn: ["Gold is the only basis for sustainable development", "Wealth lies in goods and services that meet human needs, not merely hoarded money or gold", "More gold always makes people happier", "Gold has no commodity attributes."],
        a: 1,
        e: "Vàng không thể thay thế lương thực, dịch vụ và những của cải thực tế. Sự giàu có xã hội thể hiện ở năng lực tạo ra sản phẩm đáp ứng nhu cầu con người.",
        eEn: "Gold cannot replace food, services, and other real goods. Social wealth is reflected in the capacity to produce things that meet human needs.",
        tag: ["Tiền và của cải", "Money and wealth"]
    },
    {
        q: "Chủ nghĩa Trọng thương sai lầm khi đồng nhất tiền, vàng với sự giàu có quốc gia vì đã làm gì?",
        qEn: "Why was mercantilism mistaken to equate money and gold with a nation's wealth?",
        o: ["Chỉ nghiên cứu sản xuất và bỏ qua lưu thông", "Chỉ tập trung vào lưu thông, thương nghiệp và xem đó là nguồn duy nhất tạo của cải", "Đã phát hiện lý luận giá trị thặng dư của Marx", "Phủ nhận hoàn toàn vai trò ngoại thương."],
        oEn: ["It studied production while ignoring circulation", "It focused on circulation and trade as the sole source of wealth", "It discovered Marx's theory of surplus value", "It completely rejected foreign trade."],
        a: 1,
        e: "Chủ nghĩa Trọng thương đặt trọng tâm vào lưu thông và tích lũy tiền, vàng. Phân tích của Mác nhấn mạnh rằng trao đổi tự nó không tạo ra giá trị mới.",
        eEn: "Mercantilism centered on circulation and the accumulation of money and gold. Marx's analysis emphasizes that exchange alone does not create new value.",
        tag: ["Chủ nghĩa Trọng thương", "Mercantilism"]
    },
    {
        q: "Đặc điểm đặc thù nổi bật của hàng hóa dịch vụ so với hàng hóa hữu hình là gì?",
        qEn: "What is a distinctive feature of services compared with tangible commodities?",
        o: ["Dịch vụ không do lao động trừu tượng tạo ra", "Sản xuất và tiêu dùng dịch vụ thường diễn ra đồng thời, nên không thể lưu kho như vật thể", "Dịch vụ không có giá trị trao đổi", "Dịch vụ không chịu tác động của cung cầu."],
        oEn: ["Services are not produced by abstract labor", "Service production and consumption often occur simultaneously, so services cannot be stored like physical goods", "Services have no exchange value", "Services are unaffected by supply and demand."],
        a: 1,
        e: "Dịch vụ là hàng hóa vô hình; quá trình cung ứng và tiêu dùng thường gắn liền với nhau nên không thể lưu kho như một vật phẩm hữu hình.",
        eEn: "Services are intangible commodities. Their provision and consumption are often connected in time, so they cannot be stored like physical goods.",
        tag: ["Hàng hóa dịch vụ", "Services"]
    },
    {
        q: "Đất đai tự nhiên không do lao động tạo ra, nhưng quyền sử dụng đất được mua bán với giá cao. Giá đó thực chất phản ánh điều gì?",
        qEn: "Land is not produced by labor, yet land-use rights can sell for high prices. What does that price primarily represent?",
        o: ["Lao động trực tiếp tạo ra lòng đất", "Địa tô tư bản hóa, tức giá trị hiện tại của khoản thu nhập kỳ vọng từ đất", "Giá trị nguyên vật liệu kết tinh trong đất", "Giá do Nhà nước áp đặt, không liên quan đến lợi ích kinh tế."],
        oEn: ["Labor directly used to create the land", "Capitalized rent: the present value of expected income from the land", "The value of materials embodied in the land", "A state-set price unrelated to economic returns."],
        a: 1,
        e: "Đất tự nhiên không có giá trị do lao động tạo ra. Giá quyền sử dụng đất có thể phản ánh địa tô được tư bản hóa, tức quyền hưởng nguồn thu nhập kỳ vọng trong tương lai.",
        eEn: "Natural land has no value created by labor. A land-use price may reflect capitalized rent: the right to expected future income from the land.",
        tag: ["Địa tô", "Land rent"]
    },
    {
        q: "Vì sao C. Mác gọi cổ phiếu, trái phiếu giao dịch trên thị trường chứng khoán là tư bản giả?",
        qEn: "Why did Marx describe tradable shares and bonds as fictitious capital?",
        o: ["Vì chứng khoán không thể đổi ra tiền mặt", "Vì chứng khoán là quyền đòi thu nhập, có giá cả vận động tách khỏi tư bản thực", "Vì doanh nghiệp phát hành luôn lừa đảo", "Vì chứng khoán không được pháp luật công nhận."],
        oEn: ["Because securities cannot be converted into cash", "Because securities are claims on income whose market prices can move separately from real capital", "Because issuers are always fraudulent", "Because securities are not legally recognized."],
        a: 1,
        e: "Chứng khoán đại diện cho quyền hưởng thu nhập trong tương lai. Giá của chúng có thể biến động độc lập với tư bản thực mà chúng đại diện, nên được gọi là tư bản giả.",
        eEn: "Securities represent claims on future income. Their prices can move independently of the real capital they represent, which is why they are called fictitious capital.",
        tag: ["Tư bản giả", "Fictitious capital"]
    },
    {
        q: "Một túi xách thương hiệu cao cấp có giá bán rất cao. Theo học thuyết Mác, yếu tố nào có thể góp phần tạo nên giá trị sản phẩm, đồng thời cần phân biệt với giá bán thương hiệu?",
        qEn: "A luxury handbag sells at a very high price. In Marxian theory, what may contribute to the product's value, while remaining distinct from its brand price?",
        o: ["Đầu cơ thuần túy, không dựa trên lao động", "Lao động phức tạp trong thiết kế và sản xuất; giá bán thương hiệu không đồng nhất trực tiếp với giá trị", "Chỉ riêng chi phí vận chuyển hàng không", "Giá trị sử dụng của túi hiệu luôn cao gấp hàng trăm lần."],
        oEn: ["Pure speculation unrelated to labor", "Complex labor in design and production; a brand's selling price is not directly identical to value", "Air freight costs alone", "A branded bag's use-value is always hundreds of times greater."],
        a: 1,
        e: "Lao động phức tạp trong thiết kế, kỹ thuật và sản xuất có thể tạo lượng giá trị lớn hơn lao động giản đơn cùng thời gian. Tuy nhiên, giá bán cao còn chịu tác động của thương hiệu, cung cầu và quyền lực thị trường; không thể xem toàn bộ phần chênh lệch giá là giá trị do lao động tạo ra.",
        eEn: "Complex labor in design, engineering, and production can create more value than simple labor in the same time. However, brand, supply and demand, and market power also affect price; the entire price premium cannot be treated as labor-created value.",
        tag: ["Giá trị và giá bán", "Value and price"]
    },
    {
        q: "Theo cách tiếp cận của tài liệu, vì sao tiền mã hóa như Bitcoin chưa thực hiện đầy đủ các chức năng của tiền tệ?",
        qEn: "In the document's framework, why do cryptocurrencies such as Bitcoin not fully perform the functions of money?",
        o: ["Vì không thể trao đổi trực tuyến", "Vì biến động giá lớn khiến chúng khó làm thước đo giá trị ổn định; địa vị pháp lý còn tùy từng quốc gia", "Vì không tồn tại dưới dạng giấy", "Vì không thể chia nhỏ."],
        oEn: ["Because they cannot be exchanged online", "Because high price volatility makes them an unstable measure of value; legal status varies by country", "Because they do not exist as paper notes", "Because they cannot be divided."],
        a: 1,
        e: "Biến động giá lớn làm tiền mã hóa khó duy trì sức mua ổn định và khó làm thước đo giá trị. Địa vị pháp lý khác nhau theo từng quốc gia, nên không nên khái quát rằng mọi nơi đều có cùng một quy định.",
        eEn: "High volatility makes cryptocurrencies poor at maintaining stable purchasing power and measuring value. Their legal status varies by country, so rules should not be generalized across jurisdictions.",
        tag: ["Tiền mã hóa", "Cryptocurrency"]
    },
    {
        q: "Hiện tượng được mùa mất giá trong nông nghiệp Việt Nam thể hiện sự tác động kết hợp của những quy luật nào?",
        qEn: "Which laws interact in the familiar pattern of bumper harvests followed by falling farm prices?",
        o: ["Quy luật giá trị và cạnh tranh", "Quy luật cung cầu và giá trị: cung vượt cầu khiến giá thị trường giảm xuống dưới giá trị", "Quy luật lưu thông tiền tệ và lạm phát", "Cạnh tranh nội bộ ngành."],
        oEn: ["The laws of value and competition", "Supply and demand together with value: excess supply pushes market prices below value", "The laws of money circulation and inflation", "Intra-industry competition."],
        a: 1,
        e: "Khi sản lượng thu hoạch làm cung vượt cầu có khả năng thanh toán, giá thị trường thường giảm, có thể xuống dưới giá trị hàng hóa nông sản.",
        eEn: "When a harvest pushes supply beyond effective demand, market prices generally fall and may drop below the value of the farm goods.",
        tag: ["Cung cầu", "Supply and demand"]
    },
    {
        q: "Doanh nghiệp quảng cáo và tiếp thị để kích thích tiêu dùng đang vận dụng mối quan hệ kinh tế nào?",
        qEn: "Which economic relationship do businesses use when advertising and marketing to stimulate consumption?",
        o: ["Quy luật lưu thông tiền tệ", "Tác động của cung đối với cầu: cung có thể định hình, kích thích và phát hiện nhu cầu mới", "Quy luật giá trị thặng dư tuyệt đối", "Quy luật phân hóa giàu nghèo."],
        oEn: ["The law of money circulation", "The influence of supply on demand: supply can shape, stimulate, and reveal new needs", "The law of absolute surplus value", "The law of social stratification."],
        a: 1,
        e: "Cung và cầu tác động hai chiều. Sản phẩm, cách trình bày và quảng bá có thể đáp ứng nhu cầu sẵn có, đồng thời khơi gợi hoặc phát hiện nhu cầu mới.",
        eEn: "Supply and demand influence each other. Products, presentation, and promotion can serve existing needs and also stimulate or reveal new ones.",
        tag: ["Cung và cầu", "Supply and demand"]
    },
    {
        q: "Khi giá tăng do cung nhỏ hơn cầu, doanh nghiệp nên làm gì để tránh mở rộng quá mức rồi gặp khủng hoảng thừa?",
        qEn: "When prices rise because supply is below demand, what should a business do to avoid overexpansion and a later glut?",
        o: ["Vay vốn và lập tức mở hết công suất", "Đánh giá độ trễ của giá, nhu cầu thực và khả năng tăng cung của đối thủ trước khi điều chỉnh quy mô", "Ngừng sản xuất và chuyển ngành ngay", "Đầu cơ, tích trữ hàng hóa."],
        oEn: ["Borrow and immediately expand to full capacity", "Assess price lags, underlying demand, and competitors' ability to increase supply before adjusting scale", "Stop production and switch industries immediately", "Speculate by hoarding goods."],
        a: 1,
        e: "Giá cao hiện tại có thể phản ánh tín hiệu trễ. Nếu nhiều doanh nghiệp cùng mở rộng, cung có thể vượt cầu. Cần dự báo nhu cầu và đánh giá năng lực thị trường trước khi tăng sản lượng.",
        eEn: "Today's high price may be a delayed signal. If many firms expand at once, supply can exceed demand. Businesses should forecast demand and assess market capacity before scaling up.",
        tag: ["Quản trị thị trường", "Market decisions"]
    },
    {
        q: "Cạnh tranh nội bộ ngành dẫn đến kết quả kinh tế nào?",
        qEn: "What economic outcome results from competition within an industry?",
        o: ["Hình thành tỷ suất lợi nhuận bình quân giữa các ngành", "Hình thành giá trị thị trường (giá trị xã hội) của hàng hóa", "Hình thành giá cả sản xuất", "Triệt tiêu hoàn toàn mâu thuẫn giữa lao động tư nhân và lao động xã hội."],
        oEn: ["An average profit rate across industries", "The market value (social value) of a commodity", "Production prices", "The complete elimination of the contradiction between private and social labor."],
        a: 1,
        e: "Cạnh tranh giữa các doanh nghiệp cùng ngành, thông qua khác biệt về năng suất và hao phí lao động, góp phần hình thành giá trị thị trường hay giá trị xã hội của hàng hóa.",
        eEn: "Competition among firms in the same industry, through differences in productivity and labor expenditure, helps form the market or social value of a commodity.",
        tag: ["Cạnh tranh nội ngành", "Intra-industry competition"]
    },
    {
        q: "Quyền lực của người tiêu dùng thể hiện rõ nhất qua chức năng nào của thị trường?",
        qEn: "Through which market function is consumer influence most clearly expressed?",
        o: ["Chức năng cung cấp thông tin", "Chức năng thừa nhận công dụng xã hội của hàng hóa thông qua việc mua hoặc từ chối mua", "Chức năng điều tiết bằng thuế", "Chức năng quản lý hành chính."],
        oEn: ["The information function", "Recognizing a commodity's social usefulness through purchase or refusal to buy", "Tax-based regulation", "Administrative management."],
        a: 1,
        e: "Thị trường thừa nhận công dụng xã hội của hàng hóa thông qua trao đổi. Người tiêu dùng mua hoặc từ chối mua góp phần quyết định sản phẩm có được xã hội chấp nhận hay không.",
        eEn: "The market recognizes a commodity's social usefulness through exchange. Consumers' decisions to buy or refuse a product help determine whether society accepts it.",
        tag: ["Chức năng thị trường", "Market functions"]
    },
    {
        q: "Một người may sẵn 1.000 chiếc áo theo sở thích cá nhân nhưng không bán được chiếc nào. Điều này phản ánh mâu thuẫn gì?",
        qEn: "A seller makes 1,000 shirts to personal taste but cannot sell any. Which contradiction does this illustrate?",
        o: ["Lao động cụ thể không thể chuyển hóa thành lao động trừu tượng", "Mâu thuẫn giữa lao động tư nhân của người bán và lao động xã hội được thị trường thừa nhận", "Lao động cá biệt thấp hơn lao động xã hội", "Giá trị sử dụng được thực hiện trước giá trị."],
        oEn: ["Concrete labor cannot become abstract labor", "The contradiction between the seller's private labor and labor recognized as social by the market", "Individual labor is below social labor", "Use-value is realized before value."],
        a: 1,
        e: "Người bán tự quyết định sản xuất, nhưng thị trường không chấp nhận sản phẩm. Đây là biểu hiện của mâu thuẫn giữa lao động tư nhân và lao động xã hội.",
        eEn: "The seller decides privately what to produce, but the market does not accept the product. This illustrates the contradiction between private and social labor.",
        tag: ["Lao động tư nhân và xã hội", "Private and social labor"]
    },
    {
        q: "Nếu một quốc gia phát hành lượng tiền giấy gấp ba lần lượng cần thiết cho lưu thông, hậu quả nào có thể xảy ra?",
        qEn: "What may happen if a country issues three times the amount of paper money needed for circulation?",
        o: ["Quốc gia lập tức giàu có như vua Midas", "Lạm phát nghiêm trọng, sức mua tiền giảm và giá cả tăng", "Giá trị nông sản tăng gấp ba", "Tốc độ chu chuyển tiền tự động tăng gấp ba."],
        oEn: ["The country instantly becomes rich like King Midas", "Severe inflation, declining purchasing power, and rising prices", "The value of farm goods triples", "The velocity of money automatically triples."],
        a: 1,
        e: "Nếu lượng tiền giấy phát hành vượt nhu cầu lưu thông mà các yếu tố khác không bù đắp, sức mua tiền có thể giảm và mặt bằng giá tăng.",
        eEn: "If paper money issuance exceeds circulation needs and other factors do not offset it, purchasing power may fall and the general price level may rise.",
        tag: ["Lạm phát", "Inflation"]
    },
    {
        q: "Để nền kinh tế thị trường định hướng xã hội chủ nghĩa vận hành hiệu quả và công bằng, vai trò kiến tạo của Nhà nước cần tập trung vào đâu?",
        qEn: "What should the state's enabling role focus on to support an effective and fair socialist-oriented market economy?",
        o: ["Can thiệp trực tiếp vào mọi quyết định mua bán", "Hoàn thiện thể chế, xây dựng hạ tầng, thúc đẩy cạnh tranh lành mạnh và bảo đảm tiến bộ, công bằng xã hội", "Xóa bỏ toàn bộ kinh tế tư nhân", "Áp đặt giá cố định cho toàn bộ nền kinh tế."],
        oEn: ["Directly intervene in every buying and selling decision", "Improve institutions, build infrastructure, support fair competition, and promote social progress and equity", "Eliminate all private businesses", "Fix prices throughout the economy."],
        a: 1,
        e: "Vai trò kiến tạo tập trung vào thể chế pháp lý, hạ tầng, môi trường cạnh tranh bình đẳng và các chính sách vĩ mô nhằm thúc đẩy tiến bộ, công bằng xã hội.",
        eEn: "The enabling role focuses on legal institutions, infrastructure, fair competition, and macroeconomic policies that promote social progress and equity.",
        tag: ["Vai trò Nhà nước", "Role of the state"]
    }
].map((q, index) => ({
    id: index + 1,
    text: { vi: q.q, en: q.qEn },
    options: { vi: q.o, en: q.oEn },
    correct: q.a,
    explanation: { vi: q.e, en: q.eEn },
    tag: { vi: q.tag[0], en: q.tag[1] }
}));
