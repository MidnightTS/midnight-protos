"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExhibitionDisplayInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class ExhibitionDisplayInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ExhibitionDisplayInfo", [
            { no: 1, name: "id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "param", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "detail_param", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
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
                case /* optional uint32 id */ 1:
                    message.id = reader.uint32();
                    break;
                case /* optional uint32 param */ 2:
                    message.param = reader.uint32();
                    break;
                case /* optional uint32 detail_param */ 3:
                    message.detailParam = reader.uint32();
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
        /* optional uint32 id = 1; */
        if (message.id !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.id);
        /* optional uint32 param = 2; */
        if (message.param !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.param);
        /* optional uint32 detail_param = 3; */
        if (message.detailParam !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.detailParam);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ExhibitionDisplayInfo
 */
exports.ExhibitionDisplayInfo = new ExhibitionDisplayInfo$Type();