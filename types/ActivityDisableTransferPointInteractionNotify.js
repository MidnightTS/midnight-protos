"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityDisableTransferPointInteractionNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const Uint32Pair_1 = require("./Uint32Pair");
// @generated message type with reflection information, may provide speed optimized methods
class ActivityDisableTransferPointInteractionNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("ActivityDisableTransferPointInteractionNotify", [
            { no: 13, name: "is_disable", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 11, name: "scene_point_pair", kind: "message", T: () => Uint32Pair_1.Uint32Pair }
        ]);
    }
    create(value) {
        const message = { isDisable: false };
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
                case /* bool is_disable */ 13:
                    message.isDisable = reader.bool();
                    break;
                case /* Uint32Pair scene_point_pair */ 11:
                    message.scenePointPair = Uint32Pair_1.Uint32Pair.internalBinaryRead(reader, reader.uint32(), options, message.scenePointPair);
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
        /* bool is_disable = 13; */
        if (message.isDisable !== false)
            writer.tag(13, runtime_1.WireType.Varint).bool(message.isDisable);
        /* Uint32Pair scene_point_pair = 11; */
        if (message.scenePointPair)
            Uint32Pair_1.Uint32Pair.internalBinaryWrite(message.scenePointPair, writer.tag(11, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ActivityDisableTransferPointInteractionNotify
 */
exports.ActivityDisableTransferPointInteractionNotify = new ActivityDisableTransferPointInteractionNotify$Type();
