"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeRacingGalleryRecord = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const HomeGroupPlayerInfo_1 = require("./HomeGroupPlayerInfo");
// @generated message type with reflection information, may provide speed optimized methods
class HomeRacingGalleryRecord$Type extends runtime_5.MessageType {
    constructor() {
        super("HomeRacingGalleryRecord", [
            { no: 13, name: "timestamp", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "player_info", kind: "message", T: () => HomeGroupPlayerInfo_1.HomeGroupPlayerInfo },
            { no: 6, name: "use_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { timestamp: 0, useTime: 0 };
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
                case /* uint32 timestamp */ 13:
                    message.timestamp = reader.uint32();
                    break;
                case /* HomeGroupPlayerInfo player_info */ 2:
                    message.playerInfo = HomeGroupPlayerInfo_1.HomeGroupPlayerInfo.internalBinaryRead(reader, reader.uint32(), options, message.playerInfo);
                    break;
                case /* uint32 use_time */ 6:
                    message.useTime = reader.uint32();
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
        /* uint32 timestamp = 13; */
        if (message.timestamp !== 0)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.timestamp);
        /* HomeGroupPlayerInfo player_info = 2; */
        if (message.playerInfo)
            HomeGroupPlayerInfo_1.HomeGroupPlayerInfo.internalBinaryWrite(message.playerInfo, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 use_time = 6; */
        if (message.useTime !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.useTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message HomeRacingGalleryRecord
 */
exports.HomeRacingGalleryRecord = new HomeRacingGalleryRecord$Type();
