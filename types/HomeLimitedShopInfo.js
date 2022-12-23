"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeLimitedShopInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const Vector_1 = require("./Vector");
// @generated message type with reflection information, may provide speed optimized methods
class HomeLimitedShopInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("HomeLimitedShopInfo", [
            { no: 9, name: "uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "next_guest_open_time", kind: "scalar", T: 7 /*ScalarType.FIXED32*/ },
            { no: 11, name: "djinn_rot", kind: "message", T: () => Vector_1.Vector },
            { no: 5, name: "next_open_time", kind: "scalar", T: 7 /*ScalarType.FIXED32*/ },
            { no: 2, name: "djinn_pos", kind: "message", T: () => Vector_1.Vector },
            { no: 15, name: "next_close_time", kind: "scalar", T: 7 /*ScalarType.FIXED32*/ }
        ]);
    }
    create(value) {
        const message = { uid: 0, nextGuestOpenTime: 0, nextOpenTime: 0, nextCloseTime: 0 };
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
                case /* uint32 uid */ 9:
                    message.uid = reader.uint32();
                    break;
                case /* fixed32 next_guest_open_time */ 8:
                    message.nextGuestOpenTime = reader.fixed32();
                    break;
                case /* Vector djinn_rot */ 11:
                    message.djinnRot = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.djinnRot);
                    break;
                case /* fixed32 next_open_time */ 5:
                    message.nextOpenTime = reader.fixed32();
                    break;
                case /* Vector djinn_pos */ 2:
                    message.djinnPos = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.djinnPos);
                    break;
                case /* fixed32 next_close_time */ 15:
                    message.nextCloseTime = reader.fixed32();
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
        /* uint32 uid = 9; */
        if (message.uid !== 0)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.uid);
        /* fixed32 next_guest_open_time = 8; */
        if (message.nextGuestOpenTime !== 0)
            writer.tag(8, runtime_1.WireType.Bit32).fixed32(message.nextGuestOpenTime);
        /* Vector djinn_rot = 11; */
        if (message.djinnRot)
            Vector_1.Vector.internalBinaryWrite(message.djinnRot, writer.tag(11, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* fixed32 next_open_time = 5; */
        if (message.nextOpenTime !== 0)
            writer.tag(5, runtime_1.WireType.Bit32).fixed32(message.nextOpenTime);
        /* Vector djinn_pos = 2; */
        if (message.djinnPos)
            Vector_1.Vector.internalBinaryWrite(message.djinnPos, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* fixed32 next_close_time = 15; */
        if (message.nextCloseTime !== 0)
            writer.tag(15, runtime_1.WireType.Bit32).fixed32(message.nextCloseTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message HomeLimitedShopInfo
 */
exports.HomeLimitedShopInfo = new HomeLimitedShopInfo$Type();
