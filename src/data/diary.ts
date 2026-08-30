// 日记数据配置
// 用于管理日记页面的数据

export interface DiaryItem {
	id: number;
	content: string;
	date: string;
	images?: string[];
	location?: string;
	mood?: string;
	tags?: string[];
}

// 示例日记数据
const diaryData: DiaryItem[] = [
  {
    "id": 1,
    "content": "The falling speed of cherry blossoms is five centimeters per second!",
    "date": "2025-01-15T10:30:00Z",
    "images": [
      "/images/diary/sakura.jpg",
      "/images/diary/1.webp"
    ]
  },
  {
    "id": 1788063782764,
    "content": "今日清空万里，\n无事发生。",
    "date": "2026-08-19T12:22:00.000Z",
    "location": "淮北市",
    "mood": "一般般",
    "tags": [
      "生活，随笔"
    ],
    "images": [
      "https://kong-springboot1.oss-cn-beijing.aliyuncs.com/21233815-c0e4-4a9c-b6a5-8995717d913e.jpg",
      "https://picsum.photos/800/600?random=10"
    ]
  }
];

// 获取日记列表
export const getDiaryList = (limit?: number) => {
	const sortedData = [...diaryData].sort(
		(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
	);

	if (limit && limit > 0) {
		return sortedData.slice(0, limit);
	}

	return sortedData;
};

// 获取所有标签
export const getAllTags = () => {
	const tags = new Set<string>();
	for (const item of diaryData) {
		if (item.tags) {
			for (const tag of item.tags) {
				tags.add(tag);
			}
		}
	}
	return Array.from(tags).sort();
};
