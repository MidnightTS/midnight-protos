"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LunaRiteTakeSacrificeRewardRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class LunaRiteTakeSacrificeRewardRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("LunaRiteTakeSacrificeRewardRsp", [
            { no: 14, name: "area_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 6, name: "sacrifice_reward_index", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "sacrifice_reward_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "index", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { areaId: 0, retcode: 0, sacrificeRewardIndex: 0, sacrificeRewardList: [], index: 0 };
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
                case /* uint32 area_id */ 14:
                    message.areaId = reader.uint32();
                    break;
                case /* int32 retcode */ 1:
                    message.retcode = reader.int32();
                    break;
                case /* uint32 sacrifice_reward_index */ 6:
                    message.sacrificeRewardIndex = reader.uint32();
                    break;
                case /* repeated uint32 sacrifice_reward_list */ 9:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.sacrificeRewardList.push(reader.uint32());
                    else
                        message.sacrificeRewardList.push(reader.uint32());
                    break;
                case /* uint32 index */ 4:
                    message.index = reader.uint32();
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
        /* uint32 area_id = 14; */
        if (message.areaId !== 0)
            writer.tag(14, runtime_2.WireType.Varint).uint32(message.areaId);
        /* int32 retcode = 1; */
        if (message.retcode !== 0)
            writer.tag(1, runtime_2.WireType.Varint).int32(message.retcode);
        /* uint32 sacrifice_reward_index = 6; */
        if (message.sacrificeRewardIndex !== 0)
            writer.tag(6, runtime_2.WireType.Varint).uint32(message.sacrificeRewardIndex);
        /* repeated uint32 sacrifice_reward_list = 9; */
        if (message.sacrificeRewardList.length) {
            writer.tag(9, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.sacrificeRewardList.length; i++)
                writer.uint32(message.sacrificeRewardList[i]);
            writer.join();
        }
        /* uint32 index = 4; */
        if (message.index !== 0)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.index);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message LunaRiteTakeSacrificeRewardRsp
 */
exports.LunaRiteTakeSacrificeRewardRsp = new LunaRiteTakeSacrificeRewardRsp$Type();
