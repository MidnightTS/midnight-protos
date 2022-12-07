"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChessPickCardNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ChessNormalCardInfo_1 = require("./ChessNormalCardInfo");
// @generated message type with reflection information, may provide speed optimized methods
class ChessPickCardNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("ChessPickCardNotify", [
            { no: 8, name: "normal_card_info", kind: "message", T: () => ChessNormalCardInfo_1.ChessNormalCardInfo },
            { no: 6, name: "curse_card_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { curseCardId: 0 };
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
                case /* ChessNormalCardInfo normal_card_info */ 8:
                    message.normalCardInfo = ChessNormalCardInfo_1.ChessNormalCardInfo.internalBinaryRead(reader, reader.uint32(), options, message.normalCardInfo);
                    break;
                case /* uint32 curse_card_id */ 6:
                    message.curseCardId = reader.uint32();
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
        /* ChessNormalCardInfo normal_card_info = 8; */
        if (message.normalCardInfo)
            ChessNormalCardInfo_1.ChessNormalCardInfo.internalBinaryWrite(message.normalCardInfo, writer.tag(8, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 curse_card_id = 6; */
        if (message.curseCardId !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.curseCardId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ChessPickCardNotify
 */
exports.ChessPickCardNotify = new ChessPickCardNotify$Type();
