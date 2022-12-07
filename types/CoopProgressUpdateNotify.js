"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoopProgressUpdateNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class CoopProgressUpdateNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("CoopProgressUpdateNotify", [
            { no: 4, name: "cur_coop_point", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "is_have_progress", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { curCoopPoint: 0, isHaveProgress: false };
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
                case /* uint32 cur_coop_point */ 4:
                    message.curCoopPoint = reader.uint32();
                    break;
                case /* bool is_have_progress */ 8:
                    message.isHaveProgress = reader.bool();
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
        /* uint32 cur_coop_point = 4; */
        if (message.curCoopPoint !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.curCoopPoint);
        /* bool is_have_progress = 8; */
        if (message.isHaveProgress !== false)
            writer.tag(8, runtime_1.WireType.Varint).bool(message.isHaveProgress);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message CoopProgressUpdateNotify
 */
exports.CoopProgressUpdateNotify = new CoopProgressUpdateNotify$Type();
