"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GravenInnocenceDetailInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const GravenInnocencePhotoInfo_1 = require("./GravenInnocencePhotoInfo");
const GravenInnocenceCarveInfo_1 = require("./GravenInnocenceCarveInfo");
const GravenInnocenceCampInfo_1 = require("./GravenInnocenceCampInfo");
const GravenInnocenceRaceInfo_1 = require("./GravenInnocenceRaceInfo");
// @generated message type with reflection information, may provide speed optimized methods
class GravenInnocenceDetailInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("GravenInnocenceDetailInfo", [
            { no: 8, name: "is_content_closed", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 2, name: "race_info", kind: "message", T: () => GravenInnocenceRaceInfo_1.GravenInnocenceRaceInfo },
            { no: 3, name: "camp_info", kind: "message", T: () => GravenInnocenceCampInfo_1.GravenInnocenceCampInfo },
            { no: 13, name: "carve_info", kind: "message", T: () => GravenInnocenceCarveInfo_1.GravenInnocenceCarveInfo },
            { no: 10, name: "photo_info", kind: "message", T: () => GravenInnocencePhotoInfo_1.GravenInnocencePhotoInfo }
        ]);
    }
    create(value) {
        const message = { isContentClosed: false };
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
                case /* bool is_content_closed */ 8:
                    message.isContentClosed = reader.bool();
                    break;
                case /* GravenInnocenceRaceInfo race_info */ 2:
                    message.raceInfo = GravenInnocenceRaceInfo_1.GravenInnocenceRaceInfo.internalBinaryRead(reader, reader.uint32(), options, message.raceInfo);
                    break;
                case /* GravenInnocenceCampInfo camp_info */ 3:
                    message.campInfo = GravenInnocenceCampInfo_1.GravenInnocenceCampInfo.internalBinaryRead(reader, reader.uint32(), options, message.campInfo);
                    break;
                case /* GravenInnocenceCarveInfo carve_info */ 13:
                    message.carveInfo = GravenInnocenceCarveInfo_1.GravenInnocenceCarveInfo.internalBinaryRead(reader, reader.uint32(), options, message.carveInfo);
                    break;
                case /* GravenInnocencePhotoInfo photo_info */ 10:
                    message.photoInfo = GravenInnocencePhotoInfo_1.GravenInnocencePhotoInfo.internalBinaryRead(reader, reader.uint32(), options, message.photoInfo);
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
        /* bool is_content_closed = 8; */
        if (message.isContentClosed !== false)
            writer.tag(8, runtime_1.WireType.Varint).bool(message.isContentClosed);
        /* GravenInnocenceRaceInfo race_info = 2; */
        if (message.raceInfo)
            GravenInnocenceRaceInfo_1.GravenInnocenceRaceInfo.internalBinaryWrite(message.raceInfo, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* GravenInnocenceCampInfo camp_info = 3; */
        if (message.campInfo)
            GravenInnocenceCampInfo_1.GravenInnocenceCampInfo.internalBinaryWrite(message.campInfo, writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* GravenInnocenceCarveInfo carve_info = 13; */
        if (message.carveInfo)
            GravenInnocenceCarveInfo_1.GravenInnocenceCarveInfo.internalBinaryWrite(message.carveInfo, writer.tag(13, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* GravenInnocencePhotoInfo photo_info = 10; */
        if (message.photoInfo)
            GravenInnocencePhotoInfo_1.GravenInnocencePhotoInfo.internalBinaryWrite(message.photoInfo, writer.tag(10, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GravenInnocenceDetailInfo
 */
exports.GravenInnocenceDetailInfo = new GravenInnocenceDetailInfo$Type();
