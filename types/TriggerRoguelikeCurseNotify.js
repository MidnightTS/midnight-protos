"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TriggerRoguelikeCurseNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class TriggerRoguelikeCurseNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("TriggerRoguelikeCurseNotify", [
            { no: 7, name: "Unk3300_POLIENBCNLF", kind: "scalar", jsonName: "Unk3300POLIENBCNLF", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "Unk3300_LJHJIBDPBBC", kind: "scalar", jsonName: "Unk3300LJHJIBDPBBC", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "is_trigger_curse", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 9, name: "effect_param_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { unk3300POLIENBCNLF: 0, unk3300LJHJIBDPBBC: 0, isTriggerCurse: false, effectParamList: [] };
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
                case /* uint32 Unk3300_POLIENBCNLF = 7 [json_name = "Unk3300POLIENBCNLF"];*/ 7:
                    message.unk3300POLIENBCNLF = reader.uint32();
                    break;
                case /* uint32 Unk3300_LJHJIBDPBBC = 10 [json_name = "Unk3300LJHJIBDPBBC"];*/ 10:
                    message.unk3300LJHJIBDPBBC = reader.uint32();
                    break;
                case /* bool is_trigger_curse */ 11:
                    message.isTriggerCurse = reader.bool();
                    break;
                case /* repeated uint32 effect_param_list */ 9:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.effectParamList.push(reader.uint32());
                    else
                        message.effectParamList.push(reader.uint32());
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
        /* uint32 Unk3300_POLIENBCNLF = 7 [json_name = "Unk3300POLIENBCNLF"]; */
        if (message.unk3300POLIENBCNLF !== 0)
            writer.tag(7, runtime_2.WireType.Varint).uint32(message.unk3300POLIENBCNLF);
        /* uint32 Unk3300_LJHJIBDPBBC = 10 [json_name = "Unk3300LJHJIBDPBBC"]; */
        if (message.unk3300LJHJIBDPBBC !== 0)
            writer.tag(10, runtime_2.WireType.Varint).uint32(message.unk3300LJHJIBDPBBC);
        /* bool is_trigger_curse = 11; */
        if (message.isTriggerCurse !== false)
            writer.tag(11, runtime_2.WireType.Varint).bool(message.isTriggerCurse);
        /* repeated uint32 effect_param_list = 9; */
        if (message.effectParamList.length) {
            writer.tag(9, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.effectParamList.length; i++)
                writer.uint32(message.effectParamList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message TriggerRoguelikeCurseNotify
 */
exports.TriggerRoguelikeCurseNotify = new TriggerRoguelikeCurseNotify$Type();
