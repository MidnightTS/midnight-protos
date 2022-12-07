"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IrodoriFillPoetryReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class IrodoriFillPoetryReq$Type extends runtime_5.MessageType {
    constructor() {
        super("IrodoriFillPoetryReq", [
            { no: 6, name: "line_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "theme_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { lineId: 0, themeId: 0 };
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
                case /* uint32 line_id */ 6:
                    message.lineId = reader.uint32();
                    break;
                case /* uint32 theme_id */ 5:
                    message.themeId = reader.uint32();
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
        /* uint32 line_id = 6; */
        if (message.lineId !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.lineId);
        /* uint32 theme_id = 5; */
        if (message.themeId !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.themeId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message IrodoriFillPoetryReq
 */
exports.IrodoriFillPoetryReq = new IrodoriFillPoetryReq$Type();
