"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReunionSignInInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class ReunionSignInInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("ReunionSignInInfo", [
            { no: 3, name: "Unk3300_MNJELIDKMCF", kind: "scalar", jsonName: "Unk3300MNJELIDKMCF", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "reward_day_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "config_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "Unk3300_NFNOKBNBLGE", kind: "scalar", jsonName: "Unk3300NFNOKBNBLGE", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { unk3300MNJELIDKMCF: 0, rewardDayList: [], configId: 0, unk3300NFNOKBNBLGE: 0 };
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
                case /* uint32 Unk3300_MNJELIDKMCF = 3 [json_name = "Unk3300MNJELIDKMCF"];*/ 3:
                    message.unk3300MNJELIDKMCF = reader.uint32();
                    break;
                case /* repeated uint32 reward_day_list */ 12:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.rewardDayList.push(reader.uint32());
                    else
                        message.rewardDayList.push(reader.uint32());
                    break;
                case /* uint32 config_id */ 8:
                    message.configId = reader.uint32();
                    break;
                case /* uint32 Unk3300_NFNOKBNBLGE = 10 [json_name = "Unk3300NFNOKBNBLGE"];*/ 10:
                    message.unk3300NFNOKBNBLGE = reader.uint32();
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
        /* uint32 Unk3300_MNJELIDKMCF = 3 [json_name = "Unk3300MNJELIDKMCF"]; */
        if (message.unk3300MNJELIDKMCF !== 0)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.unk3300MNJELIDKMCF);
        /* repeated uint32 reward_day_list = 12; */
        if (message.rewardDayList.length) {
            writer.tag(12, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.rewardDayList.length; i++)
                writer.uint32(message.rewardDayList[i]);
            writer.join();
        }
        /* uint32 config_id = 8; */
        if (message.configId !== 0)
            writer.tag(8, runtime_2.WireType.Varint).uint32(message.configId);
        /* uint32 Unk3300_NFNOKBNBLGE = 10 [json_name = "Unk3300NFNOKBNBLGE"]; */
        if (message.unk3300NFNOKBNBLGE !== 0)
            writer.tag(10, runtime_2.WireType.Varint).uint32(message.unk3300NFNOKBNBLGE);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ReunionSignInInfo
 */
exports.ReunionSignInInfo = new ReunionSignInInfo$Type();
