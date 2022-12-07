"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SceneGalleryInstableSprayInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const SceneGalleryInstableSprayBuffInfo_1 = require("./SceneGalleryInstableSprayBuffInfo");
// @generated message type with reflection information, may provide speed optimized methods
class SceneGalleryInstableSprayInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("SceneGalleryInstableSprayInfo", [
            { no: 10, name: "score", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "buff_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => SceneGalleryInstableSprayBuffInfo_1.SceneGalleryInstableSprayBuffInfo }
        ]);
    }
    create(value) {
        const message = { score: 0, buffInfoList: [] };
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
                case /* uint32 score */ 10:
                    message.score = reader.uint32();
                    break;
                case /* repeated SceneGalleryInstableSprayBuffInfo buff_info_list */ 4:
                    message.buffInfoList.push(SceneGalleryInstableSprayBuffInfo_1.SceneGalleryInstableSprayBuffInfo.internalBinaryRead(reader, reader.uint32(), options));
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
        /* uint32 score = 10; */
        if (message.score !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.score);
        /* repeated SceneGalleryInstableSprayBuffInfo buff_info_list = 4; */
        for (let i = 0; i < message.buffInfoList.length; i++)
            SceneGalleryInstableSprayBuffInfo_1.SceneGalleryInstableSprayBuffInfo.internalBinaryWrite(message.buffInfoList[i], writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SceneGalleryInstableSprayInfo
 */
exports.SceneGalleryInstableSprayInfo = new SceneGalleryInstableSprayInfo$Type();
