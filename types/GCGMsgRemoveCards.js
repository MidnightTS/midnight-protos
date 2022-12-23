"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GCGMsgRemoveCards = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const GCGZoneType_1 = require("./GCGZoneType");
const GCGReason_1 = require("./GCGReason");
// @generated message type with reflection information, may provide speed optimized methods
class GCGMsgRemoveCards$Type extends runtime_5.MessageType {
    constructor() {
        super("GCGMsgRemoveCards", [
            { no: 2, name: "card_guid_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "reason", kind: "enum", T: () => ["GCGReason", GCGReason_1.GCGReason] },
            { no: 9, name: "controller_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "zone", kind: "enum", T: () => ["GCGZoneType", GCGZoneType_1.GCGZoneType] }
        ]);
    }
    create(value) {
        const message = { cardGuidList: [], reason: 0, controllerId: 0, zone: 0 };
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
                case /* repeated uint32 card_guid_list */ 2:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.cardGuidList.push(reader.uint32());
                    else
                        message.cardGuidList.push(reader.uint32());
                    break;
                case /* GCGReason reason */ 13:
                    message.reason = reader.int32();
                    break;
                case /* uint32 controller_id */ 9:
                    message.controllerId = reader.uint32();
                    break;
                case /* GCGZoneType zone */ 15:
                    message.zone = reader.int32();
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
        /* repeated uint32 card_guid_list = 2; */
        if (message.cardGuidList.length) {
            writer.tag(2, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.cardGuidList.length; i++)
                writer.uint32(message.cardGuidList[i]);
            writer.join();
        }
        /* GCGReason reason = 13; */
        if (message.reason !== 0)
            writer.tag(13, runtime_2.WireType.Varint).int32(message.reason);
        /* uint32 controller_id = 9; */
        if (message.controllerId !== 0)
            writer.tag(9, runtime_2.WireType.Varint).uint32(message.controllerId);
        /* GCGZoneType zone = 15; */
        if (message.zone !== 0)
            writer.tag(15, runtime_2.WireType.Varint).int32(message.zone);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GCGMsgRemoveCards
 */
exports.GCGMsgRemoveCards = new GCGMsgRemoveCards$Type();
