"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FishBattleEndReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const FishBattleResult_1 = require("./FishBattleResult");
// @generated message type with reflection information, may provide speed optimized methods
class FishBattleEndReq$Type extends runtime_5.MessageType {
    constructor() {
        super("FishBattleEndReq", [
            { no: 11, name: "battle_result", kind: "enum", T: () => ["FishBattleResult", FishBattleResult_1.FishBattleResult, "FISH_BATTLE_RESULT_"] },
            { no: 3, name: "is_always_bonus", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 2, name: "max_bonus_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { battleResult: 0, isAlwaysBonus: false, maxBonusTime: 0 };
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
                case /* FishBattleResult battle_result */ 11:
                    message.battleResult = reader.int32();
                    break;
                case /* bool is_always_bonus */ 3:
                    message.isAlwaysBonus = reader.bool();
                    break;
                case /* uint32 max_bonus_time */ 2:
                    message.maxBonusTime = reader.uint32();
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
        /* FishBattleResult battle_result = 11; */
        if (message.battleResult !== 0)
            writer.tag(11, runtime_1.WireType.Varint).int32(message.battleResult);
        /* bool is_always_bonus = 3; */
        if (message.isAlwaysBonus !== false)
            writer.tag(3, runtime_1.WireType.Varint).bool(message.isAlwaysBonus);
        /* uint32 max_bonus_time = 2; */
        if (message.maxBonusTime !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.maxBonusTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message FishBattleEndReq
 */
exports.FishBattleEndReq = new FishBattleEndReq$Type();
