"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuickUseWidgetReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const WidgetThunderBirdFeatherInfo_1 = require("./WidgetThunderBirdFeatherInfo");
const WidgetCreatorInfo_1 = require("./WidgetCreatorInfo");
const WidgetCameraInfo_1 = require("./WidgetCameraInfo");
const WidgetCreateLocationInfo_1 = require("./WidgetCreateLocationInfo");
// @generated message type with reflection information, may provide speed optimized methods
class QuickUseWidgetReq$Type extends runtime_5.MessageType {
    constructor() {
        super("QuickUseWidgetReq", [
            { no: 1872, name: "location_info", kind: "message", oneof: "param", T: () => WidgetCreateLocationInfo_1.WidgetCreateLocationInfo },
            { no: 1835, name: "camera_info", kind: "message", oneof: "param", T: () => WidgetCameraInfo_1.WidgetCameraInfo },
            { no: 72, name: "creator_info", kind: "message", oneof: "param", T: () => WidgetCreatorInfo_1.WidgetCreatorInfo },
            { no: 491, name: "thunder_bird_feather_info", kind: "message", oneof: "param", T: () => WidgetThunderBirdFeatherInfo_1.WidgetThunderBirdFeatherInfo }
        ]);
    }
    create(value) {
        const message = { param: { oneofKind: undefined } };
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
                case /* WidgetCreateLocationInfo location_info */ 1872:
                    message.param = {
                        oneofKind: "locationInfo",
                        locationInfo: WidgetCreateLocationInfo_1.WidgetCreateLocationInfo.internalBinaryRead(reader, reader.uint32(), options, message.param.locationInfo)
                    };
                    break;
                case /* WidgetCameraInfo camera_info */ 1835:
                    message.param = {
                        oneofKind: "cameraInfo",
                        cameraInfo: WidgetCameraInfo_1.WidgetCameraInfo.internalBinaryRead(reader, reader.uint32(), options, message.param.cameraInfo)
                    };
                    break;
                case /* WidgetCreatorInfo creator_info */ 72:
                    message.param = {
                        oneofKind: "creatorInfo",
                        creatorInfo: WidgetCreatorInfo_1.WidgetCreatorInfo.internalBinaryRead(reader, reader.uint32(), options, message.param.creatorInfo)
                    };
                    break;
                case /* WidgetThunderBirdFeatherInfo thunder_bird_feather_info */ 491:
                    message.param = {
                        oneofKind: "thunderBirdFeatherInfo",
                        thunderBirdFeatherInfo: WidgetThunderBirdFeatherInfo_1.WidgetThunderBirdFeatherInfo.internalBinaryRead(reader, reader.uint32(), options, message.param.thunderBirdFeatherInfo)
                    };
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
        /* WidgetCreateLocationInfo location_info = 1872; */
        if (message.param.oneofKind === "locationInfo")
            WidgetCreateLocationInfo_1.WidgetCreateLocationInfo.internalBinaryWrite(message.param.locationInfo, writer.tag(1872, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* WidgetCameraInfo camera_info = 1835; */
        if (message.param.oneofKind === "cameraInfo")
            WidgetCameraInfo_1.WidgetCameraInfo.internalBinaryWrite(message.param.cameraInfo, writer.tag(1835, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* WidgetCreatorInfo creator_info = 72; */
        if (message.param.oneofKind === "creatorInfo")
            WidgetCreatorInfo_1.WidgetCreatorInfo.internalBinaryWrite(message.param.creatorInfo, writer.tag(72, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* WidgetThunderBirdFeatherInfo thunder_bird_feather_info = 491; */
        if (message.param.oneofKind === "thunderBirdFeatherInfo")
            WidgetThunderBirdFeatherInfo_1.WidgetThunderBirdFeatherInfo.internalBinaryWrite(message.param.thunderBirdFeatherInfo, writer.tag(491, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message QuickUseWidgetReq
 */
exports.QuickUseWidgetReq = new QuickUseWidgetReq$Type();
