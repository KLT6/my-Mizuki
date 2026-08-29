import type { ProfileConfig } from "../types/config";

// 个人资料配置
export const profileConfig: ProfileConfig = {
	avatar: "assets/images/avatar.webp", // 相对于 /src 目录。如果以 '/' 开头，则相对于 /public 目录
	name: "klt的博客",
	bio: "世界很大，我想去看看",
	typewriter: {
		enable: true, // 启用个人简介打字机效果
		speed: 80, // 打字速度（毫秒）
	},
	links: [
		{
			name: "Bilibili",
			icon: "fa7-brands:bilibili",
			url: "https://space.bilibili.com/1174429292",
		},
		{
			name: "Gitee",
			icon: "mdi:git",
			url: "https://gitee.com/chuanmuK",
		},
		{
			name: "GitHub",
			icon: "fa7-brands:github",
			url: "https://github.com/KLT6",
		},
		
	],
};
