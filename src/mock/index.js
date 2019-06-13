var Mock = require('mockjs');
const Random = Mock.Random // Mock.Random 是一个工具类，用于生成各种随机数据

Mock.mock('http://api.example.com/getIndex', 'get', {
	code: 0,
	data:{
		index:{
			title: '满天星，圆锥石头花（学名：Gypsophila paniculata L.）',
			content: '满天星（Gypsophila paniculata）又叫霞草、重瓣丝石竹。石竹科，丝石竹属。由于它花型小、浅色、花姿蓬松具立体感，气质高雅清秀，给人以朦胧感，花序群体效果极佳，是重要的陪衬花材，为当今最流行的切花之一，虽然价格昂贵，但十分畅销。',
		},
		brief: {
			title: '满天星花语',
			content: '思恋，多用于男女朋友；对于思念，有人这样说，“一直都很想你，不管做什么都会想到你，折腾过身体，费过劲，喝过酒，试过一切，但还是很想你”；也有人说“时间才是戒掉想念唯一的良药。',
			describe: '**中文学名** 圆锥石头花 **拉丁学名** Gypsophila paniculata L.<br/> **别称** 满天星、锥花丝石竹  **界** 植物界<br/>**门** 被子植物**门** 纲双子叶植物纲 <br/>**亚** 纲原始花被亚纲 **目** 中央种子目 <br/>**科** 石竹科 **亚** 科石竹亚科 <br/> **族** 石竹族 **属** 石头花属 <br/> **种** 圆锥石头花 **命名者和年代** L.，1753'
		},
		products:[
			{
				name: '完美',
				content: '**中文学名** 圆锥石头花 **拉丁学名** Gypsophila paniculata L.<br/> **别称** 满天星、锥花丝石竹  **界** 植物界<br/>**门** 被子植物**门** 纲双子叶植物纲 <br/>**亚** 纲原始花被亚纲 **目** 中央种子目 <br/>**科** 石竹科 **亚** 科石竹亚科 <br/> **族** 石竹族 **属** 石头花属 <br/> **种** 圆锥石头花 **命名者和年代** L.，1753'
			},
			{
				name: '吉普赛',
				content: '吉普赛'
			},
			{
				name: '钻石',
				content: '钻石'
			},
			{
				name: '仙女',
				content: '仙女'
			},
			{
				name: '红海洋',
				content: '红海洋'
			},
			{
				name: '火烈鸟',
				content: '火烈鸟'
			}
		],
		categorys: [
			{
				name: '形态特征',
				content: '多年生草本，高30-80厘米。根粗壮。茎单生，稀数个丛生，直立，多圆锥石头花圆锥石头花(2张)分枝，无毛或下部被腺毛。叶片披针形或线状披针形，长2-5厘米，宽2.5-7毫米，顶端渐尖，中脉明显。'
			},
			{
				name: '主要变种',
				content: 'Gypsophila paniculata var. araratica Hub.-Mor. [3] 	该变种分布于东亚及埃及周边，标本采自土耳其'
			},
			{
				name: '生长环境',
				content: '生于海拔1100-1500米河滩、草地、固定沙丘、石质山坡及农田中。 [2]  该种的生命力极强，生根快。宜在向阳环境和疏松肥沃、排水良好的微碱性砂壤土生长，土壤要求疏松，富含有机质，含水量适中，pH值7左右。 [5] '
			},
			{
				name: '分布范围',
				content: '分布于中国（疆阿尔泰山区、塔什库尔干）、哈萨克斯坦、俄罗斯（西伯利亚）、蒙古（西部）、欧洲（西部、中部和东部）、北美洲。 [2] '
			},
			{
				name: '繁殖方法',
				content: '圆锥石头花可使用扦插繁殖，在每年的8月下旬到第二年的4月下旬，从健壮的母株上花茎未伸长时取展开的、对叶有4-5节时的侧芽枝作插穗，去除基部2-3对叶片，留上部3-4对叶片，用500百万分比浓度的吲哚丁酸速蘸插穗，在1:1的珍珠岩与稻壳熏土为基质的苗床上扦插，株行距为3×3厘米。扦插后要适当遮荫，遮光度为30%-50%，需经常喷雾以保持较高的空气湿度。温度一般保持在20℃左右，25-30天即可生根。 [6] '
			},
			{
				name: '栽培技术',
				content: '假植：扦插苗生根后（一般在40天左右），从扦插床上起出幼苗进行假植，用1:1的泥炭土与园土混合放入营养钵内，40天开始假植的用直径9厘米的营养钵，45天以后开始假植的用直径10-12厘米的营养钵。假植后需遮光一周。假植3周左右植株开始生长，这时需要摘心，要彻底。摘心后侧芽萌发，即可定植，通常留3-5个枝条。定植：作高床，床高15-30厘米，宽90厘米，作床时施入基肥，每平方米施肥量为氮30克、磷25克、钾20克，混施，以有机肥为主。定植密度为30×30厘米。定植后需充分灌水。 [6] '
			},
			{
				name: '病虫防治',
				content: '该种夏季高温易发生疫病，主要表现为茎部或根部软腐或植株死亡。防治方法：定植前用福尔马林或高锰酸钾消毒土壤，发病初期可用甲基托布津1000倍液灌根消毒。夏季注意防雨、降温、通风。 [6] '
			},
			{
				name: '主要价值',
				content: '圆锥石头花为世界十大切花之一，在日本其消费位居鲜切花第二位，其花白色略带香味，颇具美感，是常用的插花材料。'
			}
		]
	}
});

Mock.mock('http://api.example.com/getProducts', 'get',{
	code: 0,
	'data|20': [
		{
			imageUrl: 'http://zhanghongwei9.oss-cn-beijing.aliyuncs.com/example-enterprise/hua.jpg',
			name: '满天星'
		}
	]
});

Mock.mock('http://api.example.com/getRotation', 'get',{
	code: 0,
	data: [
		{
			imageUrl: 'http://zhanghongwei9.oss-cn-beijing.aliyuncs.com/example-enterprise/d411d632120547b28c4e0d6fcf570784.jpg'
		},
		{
			imageUrl: 'http://zhanghongwei9.oss-cn-beijing.aliyuncs.com/example-enterprise/index-image.jpg'
		},
		{
			imageUrl: 'https://zhanghongwei9.oss-cn-beijing.aliyuncs.com/example-enterprise/fabf3ccac4b243039a8ec2c5891e6f13.jpg'
		}
	]
});

Mock.mock('http://api.example.com/getPopulars', 'get',{
	code: 0,
	data: [
		{
			title: '简约花束(5-3-5)',
			imageUrl: 'http://zhanghongwei9.oss-cn-beijing.aliyuncs.com/example-enterprise/WechatIMG56.jpeg'
		},
		{
			title: '荷塘月色(5-3-5)',
			imageUrl: 'https://zhanghongwei9.oss-cn-beijing.aliyuncs.com/example-enterprise/WechatIMG55.jpeg'
		},
		{
			title: '清凉一夏(5-3-5)',
			imageUrl: 'https://zhanghongwei9.oss-cn-beijing.aliyuncs.com/example-enterprise/WechatIMG57.jpeg'
		}
	]
});

