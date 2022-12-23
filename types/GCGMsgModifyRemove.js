"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GCGMsgModifyRemove = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const GCGReason_1 = require("./GCGReason");
// @generated message type with reflection information, may provide speed optimized methods
class GCGMsgModifyRemove$Type extends runtime_5.MessageType {
    constructor() {
        super("GCGMsgModifyRemove", [
            { no: 7, name: "owner_card_guid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "reason", kind: "enum", T: () => ["GCGReason", GCGReason_1.GCGReason] },
            { no: 14, name: "controller_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "card_guid_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { ownerCardGuid: 0, reason: 0, controllerId: 0, cardGuidList: [] };
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
                case /* uint32 owner_card_guid */ 7:
                    message.ownerCardGuid = reader.uint32();
                    break;
                case /* GCGReason reason */ 3:
                    message.reason = reader.int32();
                    break;
                case /* uint32 controller_id */ 14:
                    message.controllerId = reader.uint32();
                    break;
                case /* repeated uint32 card_guid_list */ 13:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.cardGuidList.push(reader.uint32());
                    else
                        message.cardGuidList.push(reader.uint32());
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
        /* uint32 owner_card_guid = 7; */
        if (message.ownerCardGuid !== 0)
            writer.tag(7, runtime_2.WireType.Varint).uint32(message.ownerCardGuid);
        /* GCGReason reason = 3; */
        if (message.reason !== 0)
            writer.tag(3, runtime_2.WireType.Varint).int32(message.reason);
        /* uint32 controller_id = 14; */
        if (message.controllerId !== 0)
            writer.tag(14, runtime_2.WireType.Varint).uint32(message.controllerId);
        /* repeated uint32 card_guid_list = 13; */
        if (message.cardGuidList.length) {
            writer.tag(13, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.cardGuidList.length; i++)
                writer.uint32(message.cardGuidList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GCGMsgModifyRemove
 */
exports.GCGMsgModifyRemove = new GCGMsgModifyRemove$Type();
