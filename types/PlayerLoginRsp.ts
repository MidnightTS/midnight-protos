/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: PlayerLoginRsp.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./BlockInfo";
import * as dependency_2 from "./FeatureBlockInfo";
import * as dependency_3 from "./ResVersionConfig";
import * as dependency_4 from "./ShortAbilityHashPair";
import * as pb_1 from "google-protobuf";
export class PlayerLoginRsp extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        login_rand?: number;
        player_data?: Uint8Array;
        client_silence_md5?: string;
        total_tick_time?: number;
        is_use_ability_hash?: boolean;
        is_audit?: boolean;
        birthday?: string;
        Unk3300_HGFNECIJDLN?: boolean;
        client_silence_version_suffix?: string;
        client_version_suffix?: string;
        next_resource_url?: string;
        Unk3300_EJKCNNDFAAI?: boolean;
        short_ability_hash_map?: dependency_4.ShortAbilityHashPair[];
        is_data_need_relogin?: boolean;
        res_version_config?: dependency_3.ResVersionConfig;
        client_silence_data_version?: number;
        target_uid?: number;
        register_cps?: string;
        is_sc_open?: boolean;
        Unk3300_IIHDKKNJPGD?: boolean;
        player_data_version?: number;
        sc_info?: Uint8Array;
        country_code?: string;
        next_res_version_config?: dependency_3.ResVersionConfig;
        Unk3300_IADLIIMGDMC?: boolean;
        block_info_map?: Map<number, dependency_1.BlockInfo>;
        is_transfer?: boolean;
        target_home_owner_uid?: number;
        game_biz?: string;
        ability_hash_map?: Map<string, number>;
        ability_hash_code?: number;
        client_data_version?: number;
        client_md5?: string;
        retcode?: number;
        feature_block_info_list?: dependency_2.FeatureBlockInfo[];
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1373, 138], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("login_rand" in data && data.login_rand != undefined) {
                this.login_rand = data.login_rand;
            }
            if ("player_data" in data && data.player_data != undefined) {
                this.player_data = data.player_data;
            }
            if ("client_silence_md5" in data && data.client_silence_md5 != undefined) {
                this.client_silence_md5 = data.client_silence_md5;
            }
            if ("total_tick_time" in data && data.total_tick_time != undefined) {
                this.total_tick_time = data.total_tick_time;
            }
            if ("is_use_ability_hash" in data && data.is_use_ability_hash != undefined) {
                this.is_use_ability_hash = data.is_use_ability_hash;
            }
            if ("is_audit" in data && data.is_audit != undefined) {
                this.is_audit = data.is_audit;
            }
            if ("birthday" in data && data.birthday != undefined) {
                this.birthday = data.birthday;
            }
            if ("Unk3300_HGFNECIJDLN" in data && data.Unk3300_HGFNECIJDLN != undefined) {
                this.Unk3300_HGFNECIJDLN = data.Unk3300_HGFNECIJDLN;
            }
            if ("client_silence_version_suffix" in data && data.client_silence_version_suffix != undefined) {
                this.client_silence_version_suffix = data.client_silence_version_suffix;
            }
            if ("client_version_suffix" in data && data.client_version_suffix != undefined) {
                this.client_version_suffix = data.client_version_suffix;
            }
            if ("next_resource_url" in data && data.next_resource_url != undefined) {
                this.next_resource_url = data.next_resource_url;
            }
            if ("Unk3300_EJKCNNDFAAI" in data && data.Unk3300_EJKCNNDFAAI != undefined) {
                this.Unk3300_EJKCNNDFAAI = data.Unk3300_EJKCNNDFAAI;
            }
            if ("short_ability_hash_map" in data && data.short_ability_hash_map != undefined) {
                this.short_ability_hash_map = data.short_ability_hash_map;
            }
            if ("is_data_need_relogin" in data && data.is_data_need_relogin != undefined) {
                this.is_data_need_relogin = data.is_data_need_relogin;
            }
            if ("res_version_config" in data && data.res_version_config != undefined) {
                this.res_version_config = data.res_version_config;
            }
            if ("client_silence_data_version" in data && data.client_silence_data_version != undefined) {
                this.client_silence_data_version = data.client_silence_data_version;
            }
            if ("target_uid" in data && data.target_uid != undefined) {
                this.target_uid = data.target_uid;
            }
            if ("register_cps" in data && data.register_cps != undefined) {
                this.register_cps = data.register_cps;
            }
            if ("is_sc_open" in data && data.is_sc_open != undefined) {
                this.is_sc_open = data.is_sc_open;
            }
            if ("Unk3300_IIHDKKNJPGD" in data && data.Unk3300_IIHDKKNJPGD != undefined) {
                this.Unk3300_IIHDKKNJPGD = data.Unk3300_IIHDKKNJPGD;
            }
            if ("player_data_version" in data && data.player_data_version != undefined) {
                this.player_data_version = data.player_data_version;
            }
            if ("sc_info" in data && data.sc_info != undefined) {
                this.sc_info = data.sc_info;
            }
            if ("country_code" in data && data.country_code != undefined) {
                this.country_code = data.country_code;
            }
            if ("next_res_version_config" in data && data.next_res_version_config != undefined) {
                this.next_res_version_config = data.next_res_version_config;
            }
            if ("Unk3300_IADLIIMGDMC" in data && data.Unk3300_IADLIIMGDMC != undefined) {
                this.Unk3300_IADLIIMGDMC = data.Unk3300_IADLIIMGDMC;
            }
            if ("block_info_map" in data && data.block_info_map != undefined) {
                this.block_info_map = data.block_info_map;
            }
            if ("is_transfer" in data && data.is_transfer != undefined) {
                this.is_transfer = data.is_transfer;
            }
            if ("target_home_owner_uid" in data && data.target_home_owner_uid != undefined) {
                this.target_home_owner_uid = data.target_home_owner_uid;
            }
            if ("game_biz" in data && data.game_biz != undefined) {
                this.game_biz = data.game_biz;
            }
            if ("ability_hash_map" in data && data.ability_hash_map != undefined) {
                this.ability_hash_map = data.ability_hash_map;
            }
            if ("ability_hash_code" in data && data.ability_hash_code != undefined) {
                this.ability_hash_code = data.ability_hash_code;
            }
            if ("client_data_version" in data && data.client_data_version != undefined) {
                this.client_data_version = data.client_data_version;
            }
            if ("client_md5" in data && data.client_md5 != undefined) {
                this.client_md5 = data.client_md5;
            }
            if ("retcode" in data && data.retcode != undefined) {
                this.retcode = data.retcode;
            }
            if ("feature_block_info_list" in data && data.feature_block_info_list != undefined) {
                this.feature_block_info_list = data.feature_block_info_list;
            }
        }
        if (!this.block_info_map)
            this.block_info_map = new Map();
        if (!this.ability_hash_map)
            this.ability_hash_map = new Map();
    }
    get login_rand() {
        return pb_1.Message.getFieldWithDefault(this, 9, 0) as number;
    }
    set login_rand(value: number) {
        pb_1.Message.setField(this, 9, value);
    }
    get player_data() {
        return pb_1.Message.getFieldWithDefault(this, 2, new Uint8Array()) as Uint8Array;
    }
    set player_data(value: Uint8Array) {
        pb_1.Message.setField(this, 2, value);
    }
    get client_silence_md5() {
        return pb_1.Message.getFieldWithDefault(this, 16, "") as string;
    }
    set client_silence_md5(value: string) {
        pb_1.Message.setField(this, 16, value);
    }
    get total_tick_time() {
        return pb_1.Message.getFieldWithDefault(this, 530, 0) as number;
    }
    set total_tick_time(value: number) {
        pb_1.Message.setField(this, 530, value);
    }
    get is_use_ability_hash() {
        return pb_1.Message.getFieldWithDefault(this, 5, false) as boolean;
    }
    set is_use_ability_hash(value: boolean) {
        pb_1.Message.setField(this, 5, value);
    }
    get is_audit() {
        return pb_1.Message.getFieldWithDefault(this, 930, false) as boolean;
    }
    set is_audit(value: boolean) {
        pb_1.Message.setField(this, 930, value);
    }
    get birthday() {
        return pb_1.Message.getFieldWithDefault(this, 1387, "") as string;
    }
    set birthday(value: string) {
        pb_1.Message.setField(this, 1387, value);
    }
    get Unk3300_HGFNECIJDLN() {
        return pb_1.Message.getFieldWithDefault(this, 13, false) as boolean;
    }
    set Unk3300_HGFNECIJDLN(value: boolean) {
        pb_1.Message.setField(this, 13, value);
    }
    get client_silence_version_suffix() {
        return pb_1.Message.getFieldWithDefault(this, 908, "") as string;
    }
    set client_silence_version_suffix(value: string) {
        pb_1.Message.setField(this, 908, value);
    }
    get client_version_suffix() {
        return pb_1.Message.getFieldWithDefault(this, 1845, "") as string;
    }
    set client_version_suffix(value: string) {
        pb_1.Message.setField(this, 1845, value);
    }
    get next_resource_url() {
        return pb_1.Message.getFieldWithDefault(this, 1324, "") as string;
    }
    set next_resource_url(value: string) {
        pb_1.Message.setField(this, 1324, value);
    }
    get Unk3300_EJKCNNDFAAI() {
        return pb_1.Message.getFieldWithDefault(this, 196, false) as boolean;
    }
    set Unk3300_EJKCNNDFAAI(value: boolean) {
        pb_1.Message.setField(this, 196, value);
    }
    get short_ability_hash_map() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_4.ShortAbilityHashPair, 1373) as dependency_4.ShortAbilityHashPair[];
    }
    set short_ability_hash_map(value: dependency_4.ShortAbilityHashPair[]) {
        pb_1.Message.setRepeatedWrapperField(this, 1373, value);
    }
    get is_data_need_relogin() {
        return pb_1.Message.getFieldWithDefault(this, 1119, false) as boolean;
    }
    set is_data_need_relogin(value: boolean) {
        pb_1.Message.setField(this, 1119, value);
    }
    get res_version_config() {
        return pb_1.Message.getWrapperField(this, dependency_3.ResVersionConfig, 808) as dependency_3.ResVersionConfig;
    }
    set res_version_config(value: dependency_3.ResVersionConfig) {
        pb_1.Message.setWrapperField(this, 808, value);
    }
    get has_res_version_config() {
        return pb_1.Message.getField(this, 808) != null;
    }
    get client_silence_data_version() {
        return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
    }
    set client_silence_data_version(value: number) {
        pb_1.Message.setField(this, 1, value);
    }
    get target_uid() {
        return pb_1.Message.getFieldWithDefault(this, 15, 0) as number;
    }
    set target_uid(value: number) {
        pb_1.Message.setField(this, 15, value);
    }
    get register_cps() {
        return pb_1.Message.getFieldWithDefault(this, 99, "") as string;
    }
    set register_cps(value: string) {
        pb_1.Message.setField(this, 99, value);
    }
    get is_sc_open() {
        return pb_1.Message.getFieldWithDefault(this, 1522, false) as boolean;
    }
    set is_sc_open(value: boolean) {
        pb_1.Message.setField(this, 1522, value);
    }
    get Unk3300_IIHDKKNJPGD() {
        return pb_1.Message.getFieldWithDefault(this, 8, false) as boolean;
    }
    set Unk3300_IIHDKKNJPGD(value: boolean) {
        pb_1.Message.setField(this, 8, value);
    }
    get player_data_version() {
        return pb_1.Message.getFieldWithDefault(this, 14, 0) as number;
    }
    set player_data_version(value: number) {
        pb_1.Message.setField(this, 14, value);
    }
    get sc_info() {
        return pb_1.Message.getFieldWithDefault(this, 1888, new Uint8Array()) as Uint8Array;
    }
    set sc_info(value: Uint8Array) {
        pb_1.Message.setField(this, 1888, value);
    }
    get country_code() {
        return pb_1.Message.getFieldWithDefault(this, 360, "") as string;
    }
    set country_code(value: string) {
        pb_1.Message.setField(this, 360, value);
    }
    get next_res_version_config() {
        return pb_1.Message.getWrapperField(this, dependency_3.ResVersionConfig, 1688) as dependency_3.ResVersionConfig;
    }
    set next_res_version_config(value: dependency_3.ResVersionConfig) {
        pb_1.Message.setWrapperField(this, 1688, value);
    }
    get has_next_res_version_config() {
        return pb_1.Message.getField(this, 1688) != null;
    }
    get Unk3300_IADLIIMGDMC() {
        return pb_1.Message.getFieldWithDefault(this, 17, false) as boolean;
    }
    set Unk3300_IADLIIMGDMC(value: boolean) {
        pb_1.Message.setField(this, 17, value);
    }
    get block_info_map() {
        return pb_1.Message.getField(this, 2018) as any as Map<number, dependency_1.BlockInfo>;
    }
    set block_info_map(value: Map<number, dependency_1.BlockInfo>) {
        pb_1.Message.setField(this, 2018, value as any);
    }
    get is_transfer() {
        return pb_1.Message.getFieldWithDefault(this, 295, false) as boolean;
    }
    set is_transfer(value: boolean) {
        pb_1.Message.setField(this, 295, value);
    }
    get target_home_owner_uid() {
        return pb_1.Message.getFieldWithDefault(this, 446, 0) as number;
    }
    set target_home_owner_uid(value: number) {
        pb_1.Message.setField(this, 446, value);
    }
    get game_biz() {
        return pb_1.Message.getFieldWithDefault(this, 4, "") as string;
    }
    set game_biz(value: string) {
        pb_1.Message.setField(this, 4, value);
    }
    get ability_hash_map() {
        return pb_1.Message.getField(this, 3) as any as Map<string, number>;
    }
    set ability_hash_map(value: Map<string, number>) {
        pb_1.Message.setField(this, 3, value as any);
    }
    get ability_hash_code() {
        return pb_1.Message.getFieldWithDefault(this, 12, 0) as number;
    }
    set ability_hash_code(value: number) {
        pb_1.Message.setField(this, 12, value);
    }
    get client_data_version() {
        return pb_1.Message.getFieldWithDefault(this, 10, 0) as number;
    }
    set client_data_version(value: number) {
        pb_1.Message.setField(this, 10, value);
    }
    get client_md5() {
        return pb_1.Message.getFieldWithDefault(this, 1299, "") as string;
    }
    set client_md5(value: string) {
        pb_1.Message.setField(this, 1299, value);
    }
    get retcode() {
        return pb_1.Message.getFieldWithDefault(this, 7, 0) as number;
    }
    set retcode(value: number) {
        pb_1.Message.setField(this, 7, value);
    }
    get feature_block_info_list() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_2.FeatureBlockInfo, 138) as dependency_2.FeatureBlockInfo[];
    }
    set feature_block_info_list(value: dependency_2.FeatureBlockInfo[]) {
        pb_1.Message.setRepeatedWrapperField(this, 138, value);
    }
    static fromObject(data: {
        login_rand?: number;
        player_data?: Uint8Array;
        client_silence_md5?: string;
        total_tick_time?: number;
        is_use_ability_hash?: boolean;
        is_audit?: boolean;
        birthday?: string;
        Unk3300_HGFNECIJDLN?: boolean;
        client_silence_version_suffix?: string;
        client_version_suffix?: string;
        next_resource_url?: string;
        Unk3300_EJKCNNDFAAI?: boolean;
        short_ability_hash_map?: ReturnType<typeof dependency_4.ShortAbilityHashPair.prototype.toObject>[];
        is_data_need_relogin?: boolean;
        res_version_config?: ReturnType<typeof dependency_3.ResVersionConfig.prototype.toObject>;
        client_silence_data_version?: number;
        target_uid?: number;
        register_cps?: string;
        is_sc_open?: boolean;
        Unk3300_IIHDKKNJPGD?: boolean;
        player_data_version?: number;
        sc_info?: Uint8Array;
        country_code?: string;
        next_res_version_config?: ReturnType<typeof dependency_3.ResVersionConfig.prototype.toObject>;
        Unk3300_IADLIIMGDMC?: boolean;
        block_info_map?: {
            [key: number]: ReturnType<typeof dependency_1.BlockInfo.prototype.toObject>;
        };
        is_transfer?: boolean;
        target_home_owner_uid?: number;
        game_biz?: string;
        ability_hash_map?: {
            [key: string]: number;
        };
        ability_hash_code?: number;
        client_data_version?: number;
        client_md5?: string;
        retcode?: number;
        feature_block_info_list?: ReturnType<typeof dependency_2.FeatureBlockInfo.prototype.toObject>[];
    }): PlayerLoginRsp {
        const message = new PlayerLoginRsp({});
        if (data.login_rand != null) {
            message.login_rand = data.login_rand;
        }
        if (data.player_data != null) {
            message.player_data = data.player_data;
        }
        if (data.client_silence_md5 != null) {
            message.client_silence_md5 = data.client_silence_md5;
        }
        if (data.total_tick_time != null) {
            message.total_tick_time = data.total_tick_time;
        }
        if (data.is_use_ability_hash != null) {
            message.is_use_ability_hash = data.is_use_ability_hash;
        }
        if (data.is_audit != null) {
            message.is_audit = data.is_audit;
        }
        if (data.birthday != null) {
            message.birthday = data.birthday;
        }
        if (data.Unk3300_HGFNECIJDLN != null) {
            message.Unk3300_HGFNECIJDLN = data.Unk3300_HGFNECIJDLN;
        }
        if (data.client_silence_version_suffix != null) {
            message.client_silence_version_suffix = data.client_silence_version_suffix;
        }
        if (data.client_version_suffix != null) {
            message.client_version_suffix = data.client_version_suffix;
        }
        if (data.next_resource_url != null) {
            message.next_resource_url = data.next_resource_url;
        }
        if (data.Unk3300_EJKCNNDFAAI != null) {
            message.Unk3300_EJKCNNDFAAI = data.Unk3300_EJKCNNDFAAI;
        }
        if (data.short_ability_hash_map != null) {
            message.short_ability_hash_map = data.short_ability_hash_map.map(item => dependency_4.ShortAbilityHashPair.fromObject(item));
        }
        if (data.is_data_need_relogin != null) {
            message.is_data_need_relogin = data.is_data_need_relogin;
        }
        if (data.res_version_config != null) {
            message.res_version_config = dependency_3.ResVersionConfig.fromObject(data.res_version_config);
        }
        if (data.client_silence_data_version != null) {
            message.client_silence_data_version = data.client_silence_data_version;
        }
        if (data.target_uid != null) {
            message.target_uid = data.target_uid;
        }
        if (data.register_cps != null) {
            message.register_cps = data.register_cps;
        }
        if (data.is_sc_open != null) {
            message.is_sc_open = data.is_sc_open;
        }
        if (data.Unk3300_IIHDKKNJPGD != null) {
            message.Unk3300_IIHDKKNJPGD = data.Unk3300_IIHDKKNJPGD;
        }
        if (data.player_data_version != null) {
            message.player_data_version = data.player_data_version;
        }
        if (data.sc_info != null) {
            message.sc_info = data.sc_info;
        }
        if (data.country_code != null) {
            message.country_code = data.country_code;
        }
        if (data.next_res_version_config != null) {
            message.next_res_version_config = dependency_3.ResVersionConfig.fromObject(data.next_res_version_config);
        }
        if (data.Unk3300_IADLIIMGDMC != null) {
            message.Unk3300_IADLIIMGDMC = data.Unk3300_IADLIIMGDMC;
        }
        if (typeof data.block_info_map == "object") {
            message.block_info_map = new Map(Object.entries(data.block_info_map).map(([key, value]) => [Number(key), dependency_1.BlockInfo.fromObject(value)]));
        }
        if (data.is_transfer != null) {
            message.is_transfer = data.is_transfer;
        }
        if (data.target_home_owner_uid != null) {
            message.target_home_owner_uid = data.target_home_owner_uid;
        }
        if (data.game_biz != null) {
            message.game_biz = data.game_biz;
        }
        if (typeof data.ability_hash_map == "object") {
            message.ability_hash_map = new Map(Object.entries(data.ability_hash_map));
        }
        if (data.ability_hash_code != null) {
            message.ability_hash_code = data.ability_hash_code;
        }
        if (data.client_data_version != null) {
            message.client_data_version = data.client_data_version;
        }
        if (data.client_md5 != null) {
            message.client_md5 = data.client_md5;
        }
        if (data.retcode != null) {
            message.retcode = data.retcode;
        }
        if (data.feature_block_info_list != null) {
            message.feature_block_info_list = data.feature_block_info_list.map(item => dependency_2.FeatureBlockInfo.fromObject(item));
        }
        return message;
    }
    toObject() {
        const data: {
            login_rand?: number;
            player_data?: Uint8Array;
            client_silence_md5?: string;
            total_tick_time?: number;
            is_use_ability_hash?: boolean;
            is_audit?: boolean;
            birthday?: string;
            Unk3300_HGFNECIJDLN?: boolean;
            client_silence_version_suffix?: string;
            client_version_suffix?: string;
            next_resource_url?: string;
            Unk3300_EJKCNNDFAAI?: boolean;
            short_ability_hash_map?: ReturnType<typeof dependency_4.ShortAbilityHashPair.prototype.toObject>[];
            is_data_need_relogin?: boolean;
            res_version_config?: ReturnType<typeof dependency_3.ResVersionConfig.prototype.toObject>;
            client_silence_data_version?: number;
            target_uid?: number;
            register_cps?: string;
            is_sc_open?: boolean;
            Unk3300_IIHDKKNJPGD?: boolean;
            player_data_version?: number;
            sc_info?: Uint8Array;
            country_code?: string;
            next_res_version_config?: ReturnType<typeof dependency_3.ResVersionConfig.prototype.toObject>;
            Unk3300_IADLIIMGDMC?: boolean;
            block_info_map?: {
                [key: number]: ReturnType<typeof dependency_1.BlockInfo.prototype.toObject>;
            };
            is_transfer?: boolean;
            target_home_owner_uid?: number;
            game_biz?: string;
            ability_hash_map?: {
                [key: string]: number;
            };
            ability_hash_code?: number;
            client_data_version?: number;
            client_md5?: string;
            retcode?: number;
            feature_block_info_list?: ReturnType<typeof dependency_2.FeatureBlockInfo.prototype.toObject>[];
        } = {};
        if (this.login_rand != null) {
            data.login_rand = this.login_rand;
        }
        if (this.player_data != null) {
            data.player_data = this.player_data;
        }
        if (this.client_silence_md5 != null) {
            data.client_silence_md5 = this.client_silence_md5;
        }
        if (this.total_tick_time != null) {
            data.total_tick_time = this.total_tick_time;
        }
        if (this.is_use_ability_hash != null) {
            data.is_use_ability_hash = this.is_use_ability_hash;
        }
        if (this.is_audit != null) {
            data.is_audit = this.is_audit;
        }
        if (this.birthday != null) {
            data.birthday = this.birthday;
        }
        if (this.Unk3300_HGFNECIJDLN != null) {
            data.Unk3300_HGFNECIJDLN = this.Unk3300_HGFNECIJDLN;
        }
        if (this.client_silence_version_suffix != null) {
            data.client_silence_version_suffix = this.client_silence_version_suffix;
        }
        if (this.client_version_suffix != null) {
            data.client_version_suffix = this.client_version_suffix;
        }
        if (this.next_resource_url != null) {
            data.next_resource_url = this.next_resource_url;
        }
        if (this.Unk3300_EJKCNNDFAAI != null) {
            data.Unk3300_EJKCNNDFAAI = this.Unk3300_EJKCNNDFAAI;
        }
        if (this.short_ability_hash_map != null) {
            data.short_ability_hash_map = this.short_ability_hash_map.map((item: dependency_4.ShortAbilityHashPair) => item.toObject());
        }
        if (this.is_data_need_relogin != null) {
            data.is_data_need_relogin = this.is_data_need_relogin;
        }
        if (this.res_version_config != null) {
            data.res_version_config = this.res_version_config.toObject();
        }
        if (this.client_silence_data_version != null) {
            data.client_silence_data_version = this.client_silence_data_version;
        }
        if (this.target_uid != null) {
            data.target_uid = this.target_uid;
        }
        if (this.register_cps != null) {
            data.register_cps = this.register_cps;
        }
        if (this.is_sc_open != null) {
            data.is_sc_open = this.is_sc_open;
        }
        if (this.Unk3300_IIHDKKNJPGD != null) {
            data.Unk3300_IIHDKKNJPGD = this.Unk3300_IIHDKKNJPGD;
        }
        if (this.player_data_version != null) {
            data.player_data_version = this.player_data_version;
        }
        if (this.sc_info != null) {
            data.sc_info = this.sc_info;
        }
        if (this.country_code != null) {
            data.country_code = this.country_code;
        }
        if (this.next_res_version_config != null) {
            data.next_res_version_config = this.next_res_version_config.toObject();
        }
        if (this.Unk3300_IADLIIMGDMC != null) {
            data.Unk3300_IADLIIMGDMC = this.Unk3300_IADLIIMGDMC;
        }
        if (this.block_info_map.size > 0) {
            data.block_info_map = (Object.fromEntries)((Array.from)(this.block_info_map).map(([key, value]) => [key, value.toObject()]));
        }
        if (this.is_transfer != null) {
            data.is_transfer = this.is_transfer;
        }
        if (this.target_home_owner_uid != null) {
            data.target_home_owner_uid = this.target_home_owner_uid;
        }
        if (this.game_biz != null) {
            data.game_biz = this.game_biz;
        }
        if (this.ability_hash_map.size > 0) {
            data.ability_hash_map = (Object.fromEntries)(this.ability_hash_map);
        }
        if (this.ability_hash_code != null) {
            data.ability_hash_code = this.ability_hash_code;
        }
        if (this.client_data_version != null) {
            data.client_data_version = this.client_data_version;
        }
        if (this.client_md5 != null) {
            data.client_md5 = this.client_md5;
        }
        if (this.retcode != null) {
            data.retcode = this.retcode;
        }
        if (this.feature_block_info_list != null) {
            data.feature_block_info_list = this.feature_block_info_list.map((item: dependency_2.FeatureBlockInfo) => item.toObject());
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.login_rand != 0)
            writer.writeUint64(9, this.login_rand);
        if (this.player_data.length)
            writer.writeBytes(2, this.player_data);
        if (this.client_silence_md5.length)
            writer.writeString(16, this.client_silence_md5);
        if (this.total_tick_time != 0)
            writer.writeDouble(530, this.total_tick_time);
        if (this.is_use_ability_hash != false)
            writer.writeBool(5, this.is_use_ability_hash);
        if (this.is_audit != false)
            writer.writeBool(930, this.is_audit);
        if (this.birthday.length)
            writer.writeString(1387, this.birthday);
        if (this.Unk3300_HGFNECIJDLN != false)
            writer.writeBool(13, this.Unk3300_HGFNECIJDLN);
        if (this.client_silence_version_suffix.length)
            writer.writeString(908, this.client_silence_version_suffix);
        if (this.client_version_suffix.length)
            writer.writeString(1845, this.client_version_suffix);
        if (this.next_resource_url.length)
            writer.writeString(1324, this.next_resource_url);
        if (this.Unk3300_EJKCNNDFAAI != false)
            writer.writeBool(196, this.Unk3300_EJKCNNDFAAI);
        if (this.short_ability_hash_map.length)
            writer.writeRepeatedMessage(1373, this.short_ability_hash_map, (item: dependency_4.ShortAbilityHashPair) => item.serialize(writer));
        if (this.is_data_need_relogin != false)
            writer.writeBool(1119, this.is_data_need_relogin);
        if (this.has_res_version_config)
            writer.writeMessage(808, this.res_version_config, () => this.res_version_config.serialize(writer));
        if (this.client_silence_data_version != 0)
            writer.writeUint32(1, this.client_silence_data_version);
        if (this.target_uid != 0)
            writer.writeUint32(15, this.target_uid);
        if (this.register_cps.length)
            writer.writeString(99, this.register_cps);
        if (this.is_sc_open != false)
            writer.writeBool(1522, this.is_sc_open);
        if (this.Unk3300_IIHDKKNJPGD != false)
            writer.writeBool(8, this.Unk3300_IIHDKKNJPGD);
        if (this.player_data_version != 0)
            writer.writeUint32(14, this.player_data_version);
        if (this.sc_info.length)
            writer.writeBytes(1888, this.sc_info);
        if (this.country_code.length)
            writer.writeString(360, this.country_code);
        if (this.has_next_res_version_config)
            writer.writeMessage(1688, this.next_res_version_config, () => this.next_res_version_config.serialize(writer));
        if (this.Unk3300_IADLIIMGDMC != false)
            writer.writeBool(17, this.Unk3300_IADLIIMGDMC);
        for (const [key, value] of this.block_info_map) {
            writer.writeMessage(2018, this.block_info_map, () => {
                writer.writeUint32(1, key);
                writer.writeMessage(2, value, () => value.serialize(writer));
            });
        }
        if (this.is_transfer != false)
            writer.writeBool(295, this.is_transfer);
        if (this.target_home_owner_uid != 0)
            writer.writeUint32(446, this.target_home_owner_uid);
        if (this.game_biz.length)
            writer.writeString(4, this.game_biz);
        for (const [key, value] of this.ability_hash_map) {
            writer.writeMessage(3, this.ability_hash_map, () => {
                writer.writeString(1, key);
                writer.writeInt32(2, value);
            });
        }
        if (this.ability_hash_code != 0)
            writer.writeInt32(12, this.ability_hash_code);
        if (this.client_data_version != 0)
            writer.writeUint32(10, this.client_data_version);
        if (this.client_md5.length)
            writer.writeString(1299, this.client_md5);
        if (this.retcode != 0)
            writer.writeInt32(7, this.retcode);
        if (this.feature_block_info_list.length)
            writer.writeRepeatedMessage(138, this.feature_block_info_list, (item: dependency_2.FeatureBlockInfo) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): PlayerLoginRsp {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new PlayerLoginRsp();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 9:
                    message.login_rand = reader.readUint64();
                    break;
                case 2:
                    message.player_data = reader.readBytes();
                    break;
                case 16:
                    message.client_silence_md5 = reader.readString();
                    break;
                case 530:
                    message.total_tick_time = reader.readDouble();
                    break;
                case 5:
                    message.is_use_ability_hash = reader.readBool();
                    break;
                case 930:
                    message.is_audit = reader.readBool();
                    break;
                case 1387:
                    message.birthday = reader.readString();
                    break;
                case 13:
                    message.Unk3300_HGFNECIJDLN = reader.readBool();
                    break;
                case 908:
                    message.client_silence_version_suffix = reader.readString();
                    break;
                case 1845:
                    message.client_version_suffix = reader.readString();
                    break;
                case 1324:
                    message.next_resource_url = reader.readString();
                    break;
                case 196:
                    message.Unk3300_EJKCNNDFAAI = reader.readBool();
                    break;
                case 1373:
                    reader.readMessage(message.short_ability_hash_map, () => pb_1.Message.addToRepeatedWrapperField(message, 1373, dependency_4.ShortAbilityHashPair.deserialize(reader), dependency_4.ShortAbilityHashPair));
                    break;
                case 1119:
                    message.is_data_need_relogin = reader.readBool();
                    break;
                case 808:
                    reader.readMessage(message.res_version_config, () => message.res_version_config = dependency_3.ResVersionConfig.deserialize(reader));
                    break;
                case 1:
                    message.client_silence_data_version = reader.readUint32();
                    break;
                case 15:
                    message.target_uid = reader.readUint32();
                    break;
                case 99:
                    message.register_cps = reader.readString();
                    break;
                case 1522:
                    message.is_sc_open = reader.readBool();
                    break;
                case 8:
                    message.Unk3300_IIHDKKNJPGD = reader.readBool();
                    break;
                case 14:
                    message.player_data_version = reader.readUint32();
                    break;
                case 1888:
                    message.sc_info = reader.readBytes();
                    break;
                case 360:
                    message.country_code = reader.readString();
                    break;
                case 1688:
                    reader.readMessage(message.next_res_version_config, () => message.next_res_version_config = dependency_3.ResVersionConfig.deserialize(reader));
                    break;
                case 17:
                    message.Unk3300_IADLIIMGDMC = reader.readBool();
                    break;
                case 2018:
                    reader.readMessage(message, () => pb_1.Map.deserializeBinary(message.block_info_map as any, reader, reader.readUint32, () => {
                        let value;
                        reader.readMessage(message, () => value = dependency_1.BlockInfo.deserialize(reader));
                        return value;
                    }));
                    break;
                case 295:
                    message.is_transfer = reader.readBool();
                    break;
                case 446:
                    message.target_home_owner_uid = reader.readUint32();
                    break;
                case 4:
                    message.game_biz = reader.readString();
                    break;
                case 3:
                    reader.readMessage(message, () => pb_1.Map.deserializeBinary(message.ability_hash_map as any, reader, reader.readString, reader.readInt32));
                    break;
                case 12:
                    message.ability_hash_code = reader.readInt32();
                    break;
                case 10:
                    message.client_data_version = reader.readUint32();
                    break;
                case 1299:
                    message.client_md5 = reader.readString();
                    break;
                case 7:
                    message.retcode = reader.readInt32();
                    break;
                case 138:
                    reader.readMessage(message.feature_block_info_list, () => pb_1.Message.addToRepeatedWrapperField(message, 138, dependency_2.FeatureBlockInfo.deserialize(reader), dependency_2.FeatureBlockInfo));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): PlayerLoginRsp {
        return PlayerLoginRsp.deserialize(bytes);
    }
}
