"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SceneGalleryHideAndSeekInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class SceneGalleryHideAndSeekInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("SceneGalleryHideAndSeekInfo", [
            { no: 10, name: "Unk3300_LHMHALKDBBN", kind: "scalar", jsonName: "Unk3300LHMHALKDBBN", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "Unk3300_CNLKMGFFAEC", kind: "scalar", jsonName: "Unk3300CNLKMGFFAEC", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { unk3300LHMHALKDBBN: [], unk3300CNLKMGFFAEC: [] };
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
                case /* repeated uint32 Unk3300_LHMHALKDBBN = 10 [json_name = "Unk3300LHMHALKDBBN"];*/ 10:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unk3300LHMHALKDBBN.push(reader.uint32());
                    else
                        message.unk3300LHMHALKDBBN.push(reader.uint32());
                    break;
                case /* repeated uint32 Unk3300_CNLKMGFFAEC = 7 [json_name = "Unk3300CNLKMGFFAEC"];*/ 7:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unk3300CNLKMGFFAEC.push(reader.uint32());
                    else
                        message.unk3300CNLKMGFFAEC.push(reader.uint32());
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated uint32 Unk3300_LHMHALKDBBN = 10 [json_name = "Unk3300LHMHALKDBBN"]; */
        if (message.unk3300LHMHALKDBBN.length) {
            writer.tag(10, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unk3300LHMHALKDBBN.length; i++)
                writer.uint32(message.unk3300LHMHALKDBBN[i]);
            writer.join();
        }
        /* repeated uint32 Unk3300_CNLKMGFFAEC = 7 [json_name = "Unk3300CNLKMGFFAEC"]; */
        if (message.unk3300CNLKMGFFAEC.length) {
            writer.tag(7, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unk3300CNLKMGFFAEC.length; i++)
                writer.uint32(message.unk3300CNLKMGFFAEC[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SceneGalleryHideAndSeekInfo
 */
exports.SceneGalleryHideAndSeekInfo = new SceneGalleryHideAndSeekInfo$Type();
