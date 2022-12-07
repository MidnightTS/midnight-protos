"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeResource = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class HomeResource$Type extends runtime_5.MessageType {
    constructor() {
        super("HomeResource", [
            { no: 6, name: "Unk3300_LJCAIDECBND", kind: "scalar", jsonName: "Unk3300LJCAIDECBND", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "next_refresh_time", kind: "scalar", T: 7 /*ScalarType.FIXED32*/ },
            { no: 1, name: "Unk3300_LINAPIIPNOB", kind: "scalar", jsonName: "Unk3300LINAPIIPNOB", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { unk3300LJCAIDECBND: 0, nextRefreshTime: 0, unk3300LINAPIIPNOB: 0 };
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
                case /* uint32 Unk3300_LJCAIDECBND = 6 [json_name = "Unk3300LJCAIDECBND"];*/ 6:
                    message.unk3300LJCAIDECBND = reader.uint32();
                    break;
                case /* fixed32 next_refresh_time */ 13:
                    message.nextRefreshTime = reader.fixed32();
                    break;
                case /* uint32 Unk3300_LINAPIIPNOB = 1 [json_name = "Unk3300LINAPIIPNOB"];*/ 1:
                    message.unk3300LINAPIIPNOB = reader.uint32();
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
        /* uint32 Unk3300_LJCAIDECBND = 6 [json_name = "Unk3300LJCAIDECBND"]; */
        if (message.unk3300LJCAIDECBND !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.unk3300LJCAIDECBND);
        /* fixed32 next_refresh_time = 13; */
        if (message.nextRefreshTime !== 0)
            writer.tag(13, runtime_1.WireType.Bit32).fixed32(message.nextRefreshTime);
        /* uint32 Unk3300_LINAPIIPNOB = 1 [json_name = "Unk3300LINAPIIPNOB"]; */
        if (message.unk3300LINAPIIPNOB !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.unk3300LINAPIIPNOB);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message HomeResource
 */
exports.HomeResource = new HomeResource$Type();
