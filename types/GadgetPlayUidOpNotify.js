"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GadgetPlayUidOpNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class GadgetPlayUidOpNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("GadgetPlayUidOpNotify", [
            { no: 14, name: "param_str", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "op", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "param_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "play_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "uid_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { paramStr: "", op: 0, entityId: 0, paramList: [], playType: 0, uidList: [] };
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
                case /* string param_str */ 14:
                    message.paramStr = reader.string();
                    break;
                case /* uint32 op */ 2:
                    message.op = reader.uint32();
                    break;
                case /* uint32 entity_id */ 10:
                    message.entityId = reader.uint32();
                    break;
                case /* repeated uint32 param_list */ 12:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.paramList.push(reader.uint32());
                    else
                        message.paramList.push(reader.uint32());
                    break;
                case /* uint32 play_type */ 9:
                    message.playType = reader.uint32();
                    break;
                case /* repeated uint32 uid_list */ 5:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.uidList.push(reader.uint32());
                    else
                        message.uidList.push(reader.uint32());
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
        /* string param_str = 14; */
        if (message.paramStr !== "")
            writer.tag(14, runtime_2.WireType.LengthDelimited).string(message.paramStr);
        /* uint32 op = 2; */
        if (message.op !== 0)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.op);
        /* uint32 entity_id = 10; */
        if (message.entityId !== 0)
            writer.tag(10, runtime_2.WireType.Varint).uint32(message.entityId);
        /* repeated uint32 param_list = 12; */
        if (message.paramList.length) {
            writer.tag(12, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.paramList.length; i++)
                writer.uint32(message.paramList[i]);
            writer.join();
        }
        /* uint32 play_type = 9; */
        if (message.playType !== 0)
            writer.tag(9, runtime_2.WireType.Varint).uint32(message.playType);
        /* repeated uint32 uid_list = 5; */
        if (message.uidList.length) {
            writer.tag(5, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.uidList.length; i++)
                writer.uint32(message.uidList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GadgetPlayUidOpNotify
 */
exports.GadgetPlayUidOpNotify = new GadgetPlayUidOpNotify$Type();
