"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeUpdatePictureFrameInfoReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const HomePictureFrameInfo_1 = require("./HomePictureFrameInfo");
// @generated message type with reflection information, may provide speed optimized methods
class HomeUpdatePictureFrameInfoReq$Type extends runtime_5.MessageType {
    constructor() {
        super("HomeUpdatePictureFrameInfoReq", [
            { no: 13, name: "picture_frame_info", kind: "message", T: () => HomePictureFrameInfo_1.HomePictureFrameInfo }
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
                case /* HomePictureFrameInfo picture_frame_info */ 13:
                    message.pictureFrameInfo = HomePictureFrameInfo_1.HomePictureFrameInfo.internalBinaryRead(reader, reader.uint32(), options, message.pictureFrameInfo);
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
        /* HomePictureFrameInfo picture_frame_info = 13; */
        if (message.pictureFrameInfo)
            HomePictureFrameInfo_1.HomePictureFrameInfo.internalBinaryWrite(message.pictureFrameInfo, writer.tag(13, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message HomeUpdatePictureFrameInfoReq
 */
exports.HomeUpdatePictureFrameInfoReq = new HomeUpdatePictureFrameInfoReq$Type();
