"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SceneGalleryHandballInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const PlaceInfo_1 = require("./PlaceInfo");
// @generated message type with reflection information, may provide speed optimized methods
class SceneGalleryHandballInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("SceneGalleryHandballInfo", [
            { no: 6, name: "ball_place_info", kind: "message", T: () => PlaceInfo_1.PlaceInfo },
            { no: 11, name: "is_have_ball", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { isHaveBall: false };
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
                case /* PlaceInfo ball_place_info */ 6:
                    message.ballPlaceInfo = PlaceInfo_1.PlaceInfo.internalBinaryRead(reader, reader.uint32(), options, message.ballPlaceInfo);
                    break;
                case /* bool is_have_ball */ 11:
                    message.isHaveBall = reader.bool();
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
        /* PlaceInfo ball_place_info = 6; */
        if (message.ballPlaceInfo)
            PlaceInfo_1.PlaceInfo.internalBinaryWrite(message.ballPlaceInfo, writer.tag(6, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* bool is_have_ball = 11; */
        if (message.isHaveBall !== false)
            writer.tag(11, runtime_1.WireType.Varint).bool(message.isHaveBall);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SceneGalleryHandballInfo
 */
exports.SceneGalleryHandballInfo = new SceneGalleryHandballInfo$Type();
