import type { Song } from "./types";

export const STORAGE_KEY_VOLUME = "music-player-volume";

export const DEFAULT_VOLUME = 0.7;

export const LOCAL_PLAYLIST: Song[] = [
	{
		id: 1,
		title: "Da Capo",
		artist: "HOYO-MiX",
		cover: "assets/music/cover/DC.png",
		url: "assets/music/url/Da Capo.mp3",
		duration: 240,
	},

    {
		id: 2,
		title: "Moon Halo",
		artist: "茶理理、TetraCalyx、Hanser、HOYO-MiX",
		cover: "assets/music/cover/MH.png",
		url: "assets/music/url/Moon Halo.mp3",
		duration: 240,
	},

    {
		id: 3,
		title: "TruE",
		artist: "fripSide",
		cover: "assets/music/cover/TE.png",
		url: "assets/music/url/TruE.mp3",
		duration: 240,
	},

    {
		id: 4,
		title: "Rubia",
		artist: "周深、HOYO-MiX",
		cover: "assets/music/cover/RB.png",
		url: "assets/music/url/Rubia.mp3",
		duration: 240,
	},
    {
		id: 5,
		title: "未行之路",
		artist: "HOYO-MiX、Aimer",
		cover: "assets/music/cover/WX.png",
		url: "assets/music/url/未行之路.mp3",
		duration: 240,
	},

    {
		id: 6,
		title: "晚祷的铃歌",
		artist: "HOYO-MiX",
		cover: "assets/music/cover/wddlg.png",
		url: "assets/music/url/wddlg.mp3",
		duration: 200,
	},
    {
		id: 7,
		title: "新月的摇篮曲",
		artist: "HOYO-MiX",
		cover: "assets/music/cover/xydylq.png",
		url: "assets/music/url/xydylq.mp3",
		duration: 200,
	},
    {
		id: 8,
		title: "尘间星旅",
		artist: "HOYO-MiX",
		cover: "assets/music/cover/cjxl.png",
		url: "assets/music/url/cjxl.mp3",
		duration: 200,
	},

    {
		id: 9,
		title: "only my railgun",
		artist: "fripSide",
		cover: "assets/music/cover/omr.png",
		url: "assets/music/url/omr.mp3",
		duration: 240,
	},

    {
		id: 10,
		title: "筑梦边境",
		artist: "HOYO-MiX",
		cover: "assets/music/cover/zmbj.png",
		url: "assets/music/url/zmbj.mp3",
		duration: 240,
	},

	{
		id: 11,
		title: "半屋之途",
		artist: "HOYO-MiX",
		cover: "assets/music/cover/bwzt.png",
		url: "assets/music/url/bwzt.mp3",
		duration: 240,
	},
    {
		id: 12,
		title: "Eutopia",
		artist: "Yooh",
		cover: "assets/music/cover/etp.png",
		url: "assets/music/url/etp.mp3",
		duration: 200,
	},
    {
		id: 13,
		title: "落凡尘",
		artist: "黄霄云",
		cover: "assets/music/cover/lfc.png",
		url: "assets/music/url/lfc.mp3",
		duration: 200,
	},
    {
		id: 15,
		title: "千万次初见",
		artist: "HOYO-MiX、黄美珍",
		cover: "assets/music/cover/qwccj.png",
		url: "assets/music/url/qwccj.mp3",
		duration: 200,
	},
	{
		id: 16,
		title: "独白",
		artist: "龟娘",
		cover: "assets/music/cover/dubai.png",
		url: "assets/music/url/dubai.mp3",
		duration: 200,
	},
    {
		id: 17,
		title: "于舟",
		artist: "芝麻酱",
		cover: "assets/music/cover/yz.png",
		url: "assets/music/url/yz.mp3",
		duration: 200,
	},
    {
		id: 18,
		title: "字句是我",
		artist: "芝麻酱",
		cover: "assets/music/cover/zjsw.png",
		url: "assets/music/url/zjsw.mp3",
		duration: 200,
	},
    {
		id: 19,
		title: "放你自由了",
		artist: "芝麻酱",
		cover: "assets/music/cover/fnzyl.png",
		url: "assets/music/url/fnzyl.mp3",
		duration: 200,
	},
    {
		id: 20,
		title: "怦然为你",
		artist: "芝麻酱",
		cover: "assets/music/cover/prwn.png",
		url: "assets/music/url/prwn.mp3",
		duration: 200,
	},
    {
		id: 21,
		title: "推开世界的门",
		artist: "杨乃文",
		cover: "assets/music/cover/tksjdm.png",
		url: "assets/music/url/tksjdm.mp3",
		duration: 200,
	},
    {
		id: 22,
		title: "第57次取消发送",
		artist: "菲菲公主",
		cover: "assets/music/cover/57.png",
		url: "assets/music/url/57.mp3",
		duration: 200,
	},
];

export const DEFAULT_SONG: Song = {
	title: "Sample Song",
	artist: "Sample Artist",
	cover: "/favicon/favicon.ico",
	url: "",
	duration: 0,
	id: 0,
};

export const DEFAULT_METING_API =
	"https://www.bilibili.uno/api?server=:server&type=:type&id=:id&auth=:auth&r=:r";
export const DEFAULT_METING_ID = "14164869977";
export const DEFAULT_METING_SERVER = "netease";
export const DEFAULT_METING_TYPE = "playlist";

export const ERROR_DISPLAY_DURATION = 3000;
export const SKIP_ERROR_DELAY = 1000;
