"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AreaPlayInfoNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const AreaPlayType_1 = require("./AreaPlayType");
// @generated message type with reflection information, may provide speed optimized methods
class AreaPlayInfoNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("AreaPlayInfoNotify", [
            { no: 2, name: "detail_play_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "area_play_type", kind: "enum", T: () => ["AreaPlayType", AreaPlayType_1.AreaPlayType, "AREA_PLAY_TYPE_"] }
        ]);
    }
    create(value) {
        const message = { detailPlayType: 0, areaPlayType: 0 };
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
                case /* uint32 detail_play_type */ 2:
                    message.detailPlayType = reader.uint32();
                    break;
                case /* AreaPlayType area_play_type */ 6:
                    message.areaPlayType = reader.int32();
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
        /* uint32 detail_play_type = 2; */
        if (message.detailPlayType !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.detailPlayType);
        /* AreaPlayType area_play_type = 6; */
        if (message.areaPlayType !== 0)
            writer.tag(6, runtime_1.WireType.Varint).int32(message.areaPlayType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AreaPlayInfoNotify
 */
exports.AreaPlayInfoNotify = new AreaPlayInfoNotify$Type();
