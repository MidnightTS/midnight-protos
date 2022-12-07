"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IslandPartyRaftInfoNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class IslandPartyRaftInfoNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("IslandPartyRaftInfoNotify", [
            { no: 4, name: "Unk3300_HNECEGNMKNK", kind: "scalar", jsonName: "Unk3300HNECEGNMKNK", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "Unk3300_FBACMOFGPGJ", kind: "scalar", jsonName: "Unk3300FBACMOFGPGJ", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "point_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "coin", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { unk3300HNECEGNMKNK: 0, unk3300FBACMOFGPGJ: 0, pointId: 0, coin: 0 };
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
                case /* uint32 Unk3300_HNECEGNMKNK = 4 [json_name = "Unk3300HNECEGNMKNK"];*/ 4:
                    message.unk3300HNECEGNMKNK = reader.uint32();
                    break;
                case /* uint32 Unk3300_FBACMOFGPGJ = 1 [json_name = "Unk3300FBACMOFGPGJ"];*/ 1:
                    message.unk3300FBACMOFGPGJ = reader.uint32();
                    break;
                case /* uint32 point_id */ 8:
                    message.pointId = reader.uint32();
                    break;
                case /* uint32 coin */ 14:
                    message.coin = reader.uint32();
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
        /* uint32 Unk3300_HNECEGNMKNK = 4 [json_name = "Unk3300HNECEGNMKNK"]; */
        if (message.unk3300HNECEGNMKNK !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.unk3300HNECEGNMKNK);
        /* uint32 Unk3300_FBACMOFGPGJ = 1 [json_name = "Unk3300FBACMOFGPGJ"]; */
        if (message.unk3300FBACMOFGPGJ !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.unk3300FBACMOFGPGJ);
        /* uint32 point_id = 8; */
        if (message.pointId !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.pointId);
        /* uint32 coin = 14; */
        if (message.coin !== 0)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.coin);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message IslandPartyRaftInfoNotify
 */
exports.IslandPartyRaftInfoNotify = new IslandPartyRaftInfoNotify$Type();
