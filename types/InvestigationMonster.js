"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvestigationMonster = exports.InvestigationMonster_LockState = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const WeeklyBossResinDiscountInfo_1 = require("./WeeklyBossResinDiscountInfo");
const Vector_1 = require("./Vector");
/**
 * @generated from protobuf enum InvestigationMonster.LockState
 */
var InvestigationMonster_LockState;
(function (InvestigationMonster_LockState) {
    /**
     * @generated from protobuf enum value: LOCK_STATE_NONE = 0;
     */
    InvestigationMonster_LockState[InvestigationMonster_LockState["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: LOCK_STATE_QUEST = 1;
     */
    InvestigationMonster_LockState[InvestigationMonster_LockState["QUEST"] = 1] = "QUEST";
})(InvestigationMonster_LockState = exports.InvestigationMonster_LockState || (exports.InvestigationMonster_LockState = {}));
// @generated message type with reflection information, may provide speed optimized methods
class InvestigationMonster$Type extends runtime_5.MessageType {
    constructor() {
        super("InvestigationMonster", [
            { no: 13, name: "is_alive", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 7, name: "pos", kind: "message", T: () => Vector_1.Vector },
            { no: 12, name: "scene_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "next_refresh_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "city_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1735, name: "group_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "Unk3300_ONLALCCKIEE", kind: "scalar", jsonName: "Unk3300ONLALCCKIEE", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "weekly_boss_resin_discount_info", kind: "message", T: () => WeeklyBossResinDiscountInfo_1.WeeklyBossResinDiscountInfo },
            { no: 6, name: "Unk3300_DKKOBDIEKPP", kind: "scalar", jsonName: "Unk3300DKKOBDIEKPP", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 562, name: "monster_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "lock_state", kind: "enum", T: () => ["InvestigationMonster.LockState", InvestigationMonster_LockState, "LOCK_STATE_"] },
            { no: 10, name: "Unk3300_JHLEHEOOGGB", kind: "scalar", jsonName: "Unk3300JHLEHEOOGGB", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "is_area_locked", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 2, name: "level", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "Unk3300_KNKFCOKMECI", kind: "scalar", jsonName: "Unk3300KNKFCOKMECI", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "resin", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { isAlive: false, sceneId: 0, nextRefreshTime: 0, cityId: 0, groupId: 0, unk3300ONLALCCKIEE: 0, unk3300DKKOBDIEKPP: 0, id: 0, monsterId: 0, lockState: 0, unk3300JHLEHEOOGGB: 0, isAreaLocked: false, level: 0, unk3300KNKFCOKMECI: 0, resin: 0 };
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
                case /* bool is_alive */ 13:
                    message.isAlive = reader.bool();
                    break;
                case /* Vector pos */ 7:
                    message.pos = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.pos);
                    break;
                case /* uint32 scene_id */ 12:
                    message.sceneId = reader.uint32();
                    break;
                case /* uint32 next_refresh_time */ 8:
                    message.nextRefreshTime = reader.uint32();
                    break;
                case /* uint32 city_id */ 14:
                    message.cityId = reader.uint32();
                    break;
                case /* uint32 group_id */ 1735:
                    message.groupId = reader.uint32();
                    break;
                case /* uint32 Unk3300_ONLALCCKIEE = 1 [json_name = "Unk3300ONLALCCKIEE"];*/ 1:
                    message.unk3300ONLALCCKIEE = reader.uint32();
                    break;
                case /* WeeklyBossResinDiscountInfo weekly_boss_resin_discount_info */ 3:
                    message.weeklyBossResinDiscountInfo = WeeklyBossResinDiscountInfo_1.WeeklyBossResinDiscountInfo.internalBinaryRead(reader, reader.uint32(), options, message.weeklyBossResinDiscountInfo);
                    break;
                case /* uint32 Unk3300_DKKOBDIEKPP = 6 [json_name = "Unk3300DKKOBDIEKPP"];*/ 6:
                    message.unk3300DKKOBDIEKPP = reader.uint32();
                    break;
                case /* uint32 id */ 9:
                    message.id = reader.uint32();
                    break;
                case /* uint32 monster_id */ 562:
                    message.monsterId = reader.uint32();
                    break;
                case /* InvestigationMonster.LockState lock_state */ 4:
                    message.lockState = reader.int32();
                    break;
                case /* uint32 Unk3300_JHLEHEOOGGB = 10 [json_name = "Unk3300JHLEHEOOGGB"];*/ 10:
                    message.unk3300JHLEHEOOGGB = reader.uint32();
                    break;
                case /* bool is_area_locked */ 5:
                    message.isAreaLocked = reader.bool();
                    break;
                case /* uint32 level */ 2:
                    message.level = reader.uint32();
                    break;
                case /* uint32 Unk3300_KNKFCOKMECI = 11 [json_name = "Unk3300KNKFCOKMECI"];*/ 11:
                    message.unk3300KNKFCOKMECI = reader.uint32();
                    break;
                case /* uint32 resin */ 15:
                    message.resin = reader.uint32();
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
    internalBinaryWrite(message, writer, options) {
        /* bool is_alive = 13; */
        if (message.isAlive !== false)
            writer.tag(13, runtime_1.WireType.Varint).bool(message.isAlive);
        /* Vector pos = 7; */
        if (message.pos)
            Vector_1.Vector.internalBinaryWrite(message.pos, writer.tag(7, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 scene_id = 12; */
        if (message.sceneId !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.sceneId);
        /* uint32 next_refresh_time = 8; */
        if (message.nextRefreshTime !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.nextRefreshTime);
        /* uint32 city_id = 14; */
        if (message.cityId !== 0)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.cityId);
        /* uint32 group_id = 1735; */
        if (message.groupId !== 0)
            writer.tag(1735, runtime_1.WireType.Varint).uint32(message.groupId);
        /* uint32 Unk3300_ONLALCCKIEE = 1 [json_name = "Unk3300ONLALCCKIEE"]; */
        if (message.unk3300ONLALCCKIEE !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.unk3300ONLALCCKIEE);
        /* WeeklyBossResinDiscountInfo weekly_boss_resin_discount_info = 3; */
        if (message.weeklyBossResinDiscountInfo)
            WeeklyBossResinDiscountInfo_1.WeeklyBossResinDiscountInfo.internalBinaryWrite(message.weeklyBossResinDiscountInfo, writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 Unk3300_DKKOBDIEKPP = 6 [json_name = "Unk3300DKKOBDIEKPP"]; */
        if (message.unk3300DKKOBDIEKPP !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.unk3300DKKOBDIEKPP);
        /* uint32 id = 9; */
        if (message.id !== 0)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.id);
        /* uint32 monster_id = 562; */
        if (message.monsterId !== 0)
            writer.tag(562, runtime_1.WireType.Varint).uint32(message.monsterId);
        /* InvestigationMonster.LockState lock_state = 4; */
        if (message.lockState !== 0)
            writer.tag(4, runtime_1.WireType.Varint).int32(message.lockState);
        /* uint32 Unk3300_JHLEHEOOGGB = 10 [json_name = "Unk3300JHLEHEOOGGB"]; */
        if (message.unk3300JHLEHEOOGGB !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.unk3300JHLEHEOOGGB);
        /* bool is_area_locked = 5; */
        if (message.isAreaLocked !== false)
            writer.tag(5, runtime_1.WireType.Varint).bool(message.isAreaLocked);
        /* uint32 level = 2; */
        if (message.level !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.level);
        /* uint32 Unk3300_KNKFCOKMECI = 11 [json_name = "Unk3300KNKFCOKMECI"]; */
        if (message.unk3300KNKFCOKMECI !== 0)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.unk3300KNKFCOKMECI);
        /* uint32 resin = 15; */
        if (message.resin !== 0)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.resin);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message InvestigationMonster
 */
exports.InvestigationMonster = new InvestigationMonster$Type();
