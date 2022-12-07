"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GalleryBalloonShootNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class GalleryBalloonShootNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("GalleryBalloonShootNotify", [
            { no: 3, name: "trigger_entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "combo", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "combo_disable_time", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 1, name: "cur_score", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "add_score", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 11, name: "gallery_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { triggerEntityId: 0, combo: 0, comboDisableTime: 0n, curScore: 0, addScore: 0, galleryId: 0 };
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
                case /* uint32 trigger_entity_id */ 3:
                    message.triggerEntityId = reader.uint32();
                    break;
                case /* uint32 combo */ 15:
                    message.combo = reader.uint32();
                    break;
                case /* uint64 combo_disable_time */ 9:
                    message.comboDisableTime = reader.uint64().toBigInt();
                    break;
                case /* uint32 cur_score */ 1:
                    message.curScore = reader.uint32();
                    break;
                case /* int32 add_score */ 2:
                    message.addScore = reader.int32();
                    break;
                case /* uint32 gallery_id */ 11:
                    message.galleryId = reader.uint32();
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
        /* uint32 trigger_entity_id = 3; */
        if (message.triggerEntityId !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.triggerEntityId);
        /* uint32 combo = 15; */
        if (message.combo !== 0)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.combo);
        /* uint64 combo_disable_time = 9; */
        if (message.comboDisableTime !== 0n)
            writer.tag(9, runtime_1.WireType.Varint).uint64(message.comboDisableTime);
        /* uint32 cur_score = 1; */
        if (message.curScore !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.curScore);
        /* int32 add_score = 2; */
        if (message.addScore !== 0)
            writer.tag(2, runtime_1.WireType.Varint).int32(message.addScore);
        /* uint32 gallery_id = 11; */
        if (message.galleryId !== 0)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.galleryId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GalleryBalloonShootNotify
 */
exports.GalleryBalloonShootNotify = new GalleryBalloonShootNotify$Type();
