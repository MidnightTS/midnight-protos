"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChessNormalCardInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class ChessNormalCardInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("ChessNormalCardInfo", [
            { no: 3, name: "cost_points", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "card_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "is_attach_curse", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { costPoints: 0, cardId: 0, isAttachCurse: false };
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
                case /* uint32 cost_points */ 3:
                    message.costPoints = reader.uint32();
                    break;
                case /* uint32 card_id */ 2:
                    message.cardId = reader.uint32();
                    break;
                case /* bool is_attach_curse */ 4:
                    message.isAttachCurse = reader.bool();
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
        /* uint32 cost_points = 3; */
        if (message.costPoints !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.costPoints);
        /* uint32 card_id = 2; */
        if (message.cardId !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.cardId);
        /* bool is_attach_curse = 4; */
        if (message.isAttachCurse !== false)
            writer.tag(4, runtime_1.WireType.Varint).bool(message.isAttachCurse);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ChessNormalCardInfo
 */
exports.ChessNormalCardInfo = new ChessNormalCardInfo$Type();
