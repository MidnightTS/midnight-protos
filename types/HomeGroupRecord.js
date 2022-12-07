"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeGroupRecord = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const HomeSeekFurnitureAllRecord_1 = require("./HomeSeekFurnitureAllRecord");
const HomeStakeRecord_1 = require("./HomeStakeRecord");
const HomeBalloonRecord_1 = require("./HomeBalloonRecord");
const HomeRacingRecord_1 = require("./HomeRacingRecord");
// @generated message type with reflection information, may provide speed optimized methods
class HomeGroupRecord$Type extends runtime_5.MessageType {
    constructor() {
        super("HomeGroupRecord", [
            { no: 15, name: "group_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 835, name: "racing_gallery_info", kind: "message", oneof: "detail", T: () => HomeRacingRecord_1.HomeRacingRecord },
            { no: 726, name: "balloon_gallery_info", kind: "message", oneof: "detail", T: () => HomeBalloonRecord_1.HomeBalloonRecord },
            { no: 1818, name: "stake_play_info", kind: "message", oneof: "detail", T: () => HomeStakeRecord_1.HomeStakeRecord },
            { no: 370, name: "seek_furniture_gallery_info", kind: "message", oneof: "detail", T: () => HomeSeekFurnitureAllRecord_1.HomeSeekFurnitureAllRecord }
        ]);
    }
    create(value) {
        const message = { groupId: 0, detail: { oneofKind: undefined } };
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
                case /* uint32 group_id */ 15:
                    message.groupId = reader.uint32();
                    break;
                case /* HomeRacingRecord racing_gallery_info */ 835:
                    message.detail = {
                        oneofKind: "racingGalleryInfo",
                        racingGalleryInfo: HomeRacingRecord_1.HomeRacingRecord.internalBinaryRead(reader, reader.uint32(), options, message.detail.racingGalleryInfo)
                    };
                    break;
                case /* HomeBalloonRecord balloon_gallery_info */ 726:
                    message.detail = {
                        oneofKind: "balloonGalleryInfo",
                        balloonGalleryInfo: HomeBalloonRecord_1.HomeBalloonRecord.internalBinaryRead(reader, reader.uint32(), options, message.detail.balloonGalleryInfo)
                    };
                    break;
                case /* HomeStakeRecord stake_play_info */ 1818:
                    message.detail = {
                        oneofKind: "stakePlayInfo",
                        stakePlayInfo: HomeStakeRecord_1.HomeStakeRecord.internalBinaryRead(reader, reader.uint32(), options, message.detail.stakePlayInfo)
                    };
                    break;
                case /* HomeSeekFurnitureAllRecord seek_furniture_gallery_info */ 370:
                    message.detail = {
                        oneofKind: "seekFurnitureGalleryInfo",
                        seekFurnitureGalleryInfo: HomeSeekFurnitureAllRecord_1.HomeSeekFurnitureAllRecord.internalBinaryRead(reader, reader.uint32(), options, message.detail.seekFurnitureGalleryInfo)
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
        /* uint32 group_id = 15; */
        if (message.groupId !== 0)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.groupId);
        /* HomeRacingRecord racing_gallery_info = 835; */
        if (message.detail.oneofKind === "racingGalleryInfo")
            HomeRacingRecord_1.HomeRacingRecord.internalBinaryWrite(message.detail.racingGalleryInfo, writer.tag(835, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* HomeBalloonRecord balloon_gallery_info = 726; */
        if (message.detail.oneofKind === "balloonGalleryInfo")
            HomeBalloonRecord_1.HomeBalloonRecord.internalBinaryWrite(message.detail.balloonGalleryInfo, writer.tag(726, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* HomeStakeRecord stake_play_info = 1818; */
        if (message.detail.oneofKind === "stakePlayInfo")
            HomeStakeRecord_1.HomeStakeRecord.internalBinaryWrite(message.detail.stakePlayInfo, writer.tag(1818, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* HomeSeekFurnitureAllRecord seek_furniture_gallery_info = 370; */
        if (message.detail.oneofKind === "seekFurnitureGalleryInfo")
            HomeSeekFurnitureAllRecord_1.HomeSeekFurnitureAllRecord.internalBinaryWrite(message.detail.seekFurnitureGalleryInfo, writer.tag(370, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message HomeGroupRecord
 */
exports.HomeGroupRecord = new HomeGroupRecord$Type();
