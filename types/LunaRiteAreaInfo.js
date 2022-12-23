"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LunaRiteAreaInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const LunaRiteHintStatusType_1 = require("./LunaRiteHintStatusType");
// @generated message type with reflection information, may provide speed optimized methods
class LunaRiteAreaInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("LunaRiteAreaInfo", [
            { no: 11, name: "sacrifice_reward_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "area_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "challenge_index", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "hint_status", kind: "enum", T: () => ["LunaRiteHintStatusType", LunaRiteHintStatusType_1.LunaRiteHintStatusType, "LUNA_RITE_HINT_STATUS_TYPE_"] },
            { no: 14, name: "sacrifice_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { sacrificeRewardList: [], areaId: 0, challengeIndex: 0, hintStatus: 0, sacrificeList: [] };
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
                case /* repeated uint32 sacrifice_reward_list */ 11:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.sacrificeRewardList.push(reader.uint32());
                    else
                        message.sacrificeRewardList.push(reader.uint32());
                    break;
                case /* uint32 area_id */ 15:
                    message.areaId = reader.uint32();
                    break;
                case /* uint32 challenge_index */ 1:
                    message.challengeIndex = reader.uint32();
                    break;
                case /* LunaRiteHintStatusType hint_status */ 7:
                    message.hintStatus = reader.int32();
                    break;
                case /* repeated uint32 sacrifice_list */ 14:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.sacrificeList.push(reader.uint32());
                    else
                        message.sacrificeList.push(reader.uint32());
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated uint32 sacrifice_reward_list = 11; */
        if (message.sacrificeRewardList.length) {
            writer.tag(11, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.sacrificeRewardList.length; i++)
                writer.uint32(message.sacrificeRewardList[i]);
            writer.join();
        }
        /* uint32 area_id = 15; */
        if (message.areaId !== 0)
            writer.tag(15, runtime_2.WireType.Varint).uint32(message.areaId);
        /* uint32 challenge_index = 1; */
        if (message.challengeIndex !== 0)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.challengeIndex);
        /* LunaRiteHintStatusType hint_status = 7; */
        if (message.hintStatus !== 0)
            writer.tag(7, runtime_2.WireType.Varint).int32(message.hintStatus);
        /* repeated uint32 sacrifice_list = 14; */
        if (message.sacrificeList.length) {
            writer.tag(14, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.sacrificeList.length; i++)
                writer.uint32(message.sacrificeList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message LunaRiteAreaInfo
 */
exports.LunaRiteAreaInfo = new LunaRiteAreaInfo$Type();
