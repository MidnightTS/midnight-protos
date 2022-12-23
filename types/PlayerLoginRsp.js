"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerLoginRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const FeatureBlockInfo_1 = require("./FeatureBlockInfo");
const BlockInfo_1 = require("./BlockInfo");
const ResVersionConfig_1 = require("./ResVersionConfig");
const ShortAbilityHashPair_1 = require("./ShortAbilityHashPair");
// @generated message type with reflection information, may provide speed optimized methods
class PlayerLoginRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("PlayerLoginRsp", [
            { no: 9, name: "login_rand", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 2, name: "player_data", kind: "scalar", T: 12 /*ScalarType.BYTES*/ },
            { no: 16, name: "client_silence_md5", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 530, name: "total_tick_time", kind: "scalar", T: 1 /*ScalarType.DOUBLE*/ },
            { no: 5, name: "is_use_ability_hash", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 930, name: "is_audit", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 1387, name: "birthday", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 13, name: "Unk3300_HGFNECIJDLN", kind: "scalar", jsonName: "Unk3300HGFNECIJDLN", T: 8 /*ScalarType.BOOL*/ },
            { no: 908, name: "client_silence_version_suffix", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 1845, name: "client_version_suffix", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 1324, name: "next_resource_url", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 196, name: "Unk3300_EJKCNNDFAAI", kind: "scalar", jsonName: "Unk3300EJKCNNDFAAI", T: 8 /*ScalarType.BOOL*/ },
            { no: 1373, name: "short_ability_hash_map", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ShortAbilityHashPair_1.ShortAbilityHashPair },
            { no: 1119, name: "is_data_need_relogin", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 808, name: "res_version_config", kind: "message", T: () => ResVersionConfig_1.ResVersionConfig },
            { no: 1, name: "client_silence_data_version", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "target_uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 99, name: "register_cps", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 1522, name: "is_sc_open", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 8, name: "Unk3300_IIHDKKNJPGD", kind: "scalar", jsonName: "Unk3300IIHDKKNJPGD", T: 8 /*ScalarType.BOOL*/ },
            { no: 14, name: "player_data_version", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1888, name: "sc_info", kind: "scalar", T: 12 /*ScalarType.BYTES*/ },
            { no: 360, name: "country_code", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 1688, name: "next_res_version_config", kind: "message", T: () => ResVersionConfig_1.ResVersionConfig },
            { no: 17, name: "Unk3300_IADLIIMGDMC", kind: "scalar", jsonName: "Unk3300IADLIIMGDMC", T: 8 /*ScalarType.BOOL*/ },
            { no: 2018, name: "block_info_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "message", T: () => BlockInfo_1.BlockInfo } },
            { no: 295, name: "is_transfer", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 446, name: "target_home_owner_uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "game_biz", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "ability_hash_map", kind: "map", K: 9 /*ScalarType.STRING*/, V: { kind: "scalar", T: 5 /*ScalarType.INT32*/ } },
            { no: 12, name: "ability_hash_code", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 10, name: "client_data_version", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1299, name: "client_md5", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 7, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 138, name: "feature_block_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => FeatureBlockInfo_1.FeatureBlockInfo }
        ]);
    }
    create(value) {
        const message = { loginRand: 0n, playerData: new Uint8Array(0), clientSilenceMd5: "", totalTickTime: 0, isUseAbilityHash: false, isAudit: false, birthday: "", unk3300HGFNECIJDLN: false, clientSilenceVersionSuffix: "", clientVersionSuffix: "", nextResourceUrl: "", unk3300EJKCNNDFAAI: false, shortAbilityHashMap: [], isDataNeedRelogin: false, clientSilenceDataVersion: 0, targetUid: 0, registerCps: "", isScOpen: false, unk3300IIHDKKNJPGD: false, playerDataVersion: 0, scInfo: new Uint8Array(0), countryCode: "", unk3300IADLIIMGDMC: false, blockInfoMap: {}, isTransfer: false, targetHomeOwnerUid: 0, gameBiz: "", abilityHashMap: {}, abilityHashCode: 0, clientDataVersion: 0, clientMd5: "", retcode: 0, featureBlockInfoList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint64 login_rand */ 9:
                    message.loginRand = reader.uint64().toBigInt();
                    break;
                case /* bytes player_data */ 2:
                    message.playerData = reader.bytes();
                    break;
                case /* string client_silence_md5 */ 16:
                    message.clientSilenceMd5 = reader.string();
                    break;
                case /* double total_tick_time */ 530:
                    message.totalTickTime = reader.double();
                    break;
                case /* bool is_use_ability_hash */ 5:
                    message.isUseAbilityHash = reader.bool();
                    break;
                case /* bool is_audit */ 930:
                    message.isAudit = reader.bool();
                    break;
                case /* string birthday */ 1387:
                    message.birthday = reader.string();
                    break;
                case /* bool Unk3300_HGFNECIJDLN = 13 [json_name = "Unk3300HGFNECIJDLN"];*/ 13:
                    message.unk3300HGFNECIJDLN = reader.bool();
                    break;
                case /* string client_silence_version_suffix */ 908:
                    message.clientSilenceVersionSuffix = reader.string();
                    break;
                case /* string client_version_suffix */ 1845:
                    message.clientVersionSuffix = reader.string();
                    break;
                case /* string next_resource_url */ 1324:
                    message.nextResourceUrl = reader.string();
                    break;
                case /* bool Unk3300_EJKCNNDFAAI = 196 [json_name = "Unk3300EJKCNNDFAAI"];*/ 196:
                    message.unk3300EJKCNNDFAAI = reader.bool();
                    break;
                case /* repeated ShortAbilityHashPair short_ability_hash_map */ 1373:
                    message.shortAbilityHashMap.push(ShortAbilityHashPair_1.ShortAbilityHashPair.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* bool is_data_need_relogin */ 1119:
                    message.isDataNeedRelogin = reader.bool();
                    break;
                case /* ResVersionConfig res_version_config */ 808:
                    message.resVersionConfig = ResVersionConfig_1.ResVersionConfig.internalBinaryRead(reader, reader.uint32(), options, message.resVersionConfig);
                    break;
                case /* uint32 client_silence_data_version */ 1:
                    message.clientSilenceDataVersion = reader.uint32();
                    break;
                case /* uint32 target_uid */ 15:
                    message.targetUid = reader.uint32();
                    break;
                case /* string register_cps */ 99:
                    message.registerCps = reader.string();
                    break;
                case /* bool is_sc_open */ 1522:
                    message.isScOpen = reader.bool();
                    break;
                case /* bool Unk3300_IIHDKKNJPGD = 8 [json_name = "Unk3300IIHDKKNJPGD"];*/ 8:
                    message.unk3300IIHDKKNJPGD = reader.bool();
                    break;
                case /* uint32 player_data_version */ 14:
                    message.playerDataVersion = reader.uint32();
                    break;
                case /* bytes sc_info */ 1888:
                    message.scInfo = reader.bytes();
                    break;
                case /* string country_code */ 360:
                    message.countryCode = reader.string();
                    break;
                case /* ResVersionConfig next_res_version_config */ 1688:
                    message.nextResVersionConfig = ResVersionConfig_1.ResVersionConfig.internalBinaryRead(reader, reader.uint32(), options, message.nextResVersionConfig);
                    break;
                case /* bool Unk3300_IADLIIMGDMC = 17 [json_name = "Unk3300IADLIIMGDMC"];*/ 17:
                    message.unk3300IADLIIMGDMC = reader.bool();
                    break;
                case /* map<uint32, BlockInfo> block_info_map */ 2018:
                    this.binaryReadMap2018(message.blockInfoMap, reader, options);
                    break;
                case /* bool is_transfer */ 295:
                    message.isTransfer = reader.bool();
                    break;
                case /* uint32 target_home_owner_uid */ 446:
                    message.targetHomeOwnerUid = reader.uint32();
                    break;
                case /* string game_biz */ 4:
                    message.gameBiz = reader.string();
                    break;
                case /* map<string, int32> ability_hash_map */ 3:
                    this.binaryReadMap3(message.abilityHashMap, reader, options);
                    break;
                case /* int32 ability_hash_code */ 12:
                    message.abilityHashCode = reader.int32();
                    break;
                case /* uint32 client_data_version */ 10:
                    message.clientDataVersion = reader.uint32();
                    break;
                case /* string client_md5 */ 1299:
                    message.clientMd5 = reader.string();
                    break;
                case /* int32 retcode */ 7:
                    message.retcode = reader.int32();
                    break;
                case /* repeated FeatureBlockInfo feature_block_info_list */ 138:
                    message.featureBlockInfoList.push(FeatureBlockInfo_1.FeatureBlockInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    binaryReadMap2018(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = BlockInfo_1.BlockInfo.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field PlayerLoginRsp.block_info_map");
            }
        }
        map[key ?? 0] = val ?? BlockInfo_1.BlockInfo.create();
    }
    binaryReadMap3(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.string();
                    break;
                case 2:
                    val = reader.int32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field PlayerLoginRsp.ability_hash_map");
            }
        }
        map[key ?? ""] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* uint64 login_rand = 9; */
        if (message.loginRand !== 0n)
            writer.tag(9, runtime_1.WireType.Varint).uint64(message.loginRand);
        /* bytes player_data = 2; */
        if (message.playerData.length)
            writer.tag(2, runtime_1.WireType.LengthDelimited).bytes(message.playerData);
        /* string client_silence_md5 = 16; */
        if (message.clientSilenceMd5 !== "")
            writer.tag(16, runtime_1.WireType.LengthDelimited).string(message.clientSilenceMd5);
        /* double total_tick_time = 530; */
        if (message.totalTickTime !== 0)
            writer.tag(530, runtime_1.WireType.Bit64).double(message.totalTickTime);
        /* bool is_use_ability_hash = 5; */
        if (message.isUseAbilityHash !== false)
            writer.tag(5, runtime_1.WireType.Varint).bool(message.isUseAbilityHash);
        /* bool is_audit = 930; */
        if (message.isAudit !== false)
            writer.tag(930, runtime_1.WireType.Varint).bool(message.isAudit);
        /* string birthday = 1387; */
        if (message.birthday !== "")
            writer.tag(1387, runtime_1.WireType.LengthDelimited).string(message.birthday);
        /* bool Unk3300_HGFNECIJDLN = 13 [json_name = "Unk3300HGFNECIJDLN"]; */
        if (message.unk3300HGFNECIJDLN !== false)
            writer.tag(13, runtime_1.WireType.Varint).bool(message.unk3300HGFNECIJDLN);
        /* string client_silence_version_suffix = 908; */
        if (message.clientSilenceVersionSuffix !== "")
            writer.tag(908, runtime_1.WireType.LengthDelimited).string(message.clientSilenceVersionSuffix);
        /* string client_version_suffix = 1845; */
        if (message.clientVersionSuffix !== "")
            writer.tag(1845, runtime_1.WireType.LengthDelimited).string(message.clientVersionSuffix);
        /* string next_resource_url = 1324; */
        if (message.nextResourceUrl !== "")
            writer.tag(1324, runtime_1.WireType.LengthDelimited).string(message.nextResourceUrl);
        /* bool Unk3300_EJKCNNDFAAI = 196 [json_name = "Unk3300EJKCNNDFAAI"]; */
        if (message.unk3300EJKCNNDFAAI !== false)
            writer.tag(196, runtime_1.WireType.Varint).bool(message.unk3300EJKCNNDFAAI);
        /* repeated ShortAbilityHashPair short_ability_hash_map = 1373; */
        for (let i = 0; i < message.shortAbilityHashMap.length; i++)
            ShortAbilityHashPair_1.ShortAbilityHashPair.internalBinaryWrite(message.shortAbilityHashMap[i], writer.tag(1373, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* bool is_data_need_relogin = 1119; */
        if (message.isDataNeedRelogin !== false)
            writer.tag(1119, runtime_1.WireType.Varint).bool(message.isDataNeedRelogin);
        /* ResVersionConfig res_version_config = 808; */
        if (message.resVersionConfig)
            ResVersionConfig_1.ResVersionConfig.internalBinaryWrite(message.resVersionConfig, writer.tag(808, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 client_silence_data_version = 1; */
        if (message.clientSilenceDataVersion !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.clientSilenceDataVersion);
        /* uint32 target_uid = 15; */
        if (message.targetUid !== 0)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.targetUid);
        /* string register_cps = 99; */
        if (message.registerCps !== "")
            writer.tag(99, runtime_1.WireType.LengthDelimited).string(message.registerCps);
        /* bool is_sc_open = 1522; */
        if (message.isScOpen !== false)
            writer.tag(1522, runtime_1.WireType.Varint).bool(message.isScOpen);
        /* bool Unk3300_IIHDKKNJPGD = 8 [json_name = "Unk3300IIHDKKNJPGD"]; */
        if (message.unk3300IIHDKKNJPGD !== false)
            writer.tag(8, runtime_1.WireType.Varint).bool(message.unk3300IIHDKKNJPGD);
        /* uint32 player_data_version = 14; */
        if (message.playerDataVersion !== 0)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.playerDataVersion);
        /* bytes sc_info = 1888; */
        if (message.scInfo.length)
            writer.tag(1888, runtime_1.WireType.LengthDelimited).bytes(message.scInfo);
        /* string country_code = 360; */
        if (message.countryCode !== "")
            writer.tag(360, runtime_1.WireType.LengthDelimited).string(message.countryCode);
        /* ResVersionConfig next_res_version_config = 1688; */
        if (message.nextResVersionConfig)
            ResVersionConfig_1.ResVersionConfig.internalBinaryWrite(message.nextResVersionConfig, writer.tag(1688, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* bool Unk3300_IADLIIMGDMC = 17 [json_name = "Unk3300IADLIIMGDMC"]; */
        if (message.unk3300IADLIIMGDMC !== false)
            writer.tag(17, runtime_1.WireType.Varint).bool(message.unk3300IADLIIMGDMC);
        /* map<uint32, BlockInfo> block_info_map = 2018; */
        for (let k of Object.keys(message.blockInfoMap)) {
            writer.tag(2018, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k));
            writer.tag(2, runtime_1.WireType.LengthDelimited).fork();
            BlockInfo_1.BlockInfo.internalBinaryWrite(message.blockInfoMap[k], writer, options);
            writer.join().join();
        }
        /* bool is_transfer = 295; */
        if (message.isTransfer !== false)
            writer.tag(295, runtime_1.WireType.Varint).bool(message.isTransfer);
        /* uint32 target_home_owner_uid = 446; */
        if (message.targetHomeOwnerUid !== 0)
            writer.tag(446, runtime_1.WireType.Varint).uint32(message.targetHomeOwnerUid);
        /* string game_biz = 4; */
        if (message.gameBiz !== "")
            writer.tag(4, runtime_1.WireType.LengthDelimited).string(message.gameBiz);
        /* map<string, int32> ability_hash_map = 3; */
        for (let k of Object.keys(message.abilityHashMap))
            writer.tag(3, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.LengthDelimited).string(k).tag(2, runtime_1.WireType.Varint).int32(message.abilityHashMap[k]).join();
        /* int32 ability_hash_code = 12; */
        if (message.abilityHashCode !== 0)
            writer.tag(12, runtime_1.WireType.Varint).int32(message.abilityHashCode);
        /* uint32 client_data_version = 10; */
        if (message.clientDataVersion !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.clientDataVersion);
        /* string client_md5 = 1299; */
        if (message.clientMd5 !== "")
            writer.tag(1299, runtime_1.WireType.LengthDelimited).string(message.clientMd5);
        /* int32 retcode = 7; */
        if (message.retcode !== 0)
            writer.tag(7, runtime_1.WireType.Varint).int32(message.retcode);
        /* repeated FeatureBlockInfo feature_block_info_list = 138; */
        for (let i = 0; i < message.featureBlockInfoList.length; i++)
            FeatureBlockInfo_1.FeatureBlockInfo.internalBinaryWrite(message.featureBlockInfoList[i], writer.tag(138, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message PlayerLoginRsp
 */
exports.PlayerLoginRsp = new PlayerLoginRsp$Type();
