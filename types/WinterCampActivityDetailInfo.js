"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinterCampActivityDetailInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const WinterCampRaceStageInfo_1 = require("./WinterCampRaceStageInfo");
const ItemParam_1 = require("./ItemParam");
const WinterCampStageInfo_1 = require("./WinterCampStageInfo");
// @generated message type with reflection information, may provide speed optimized methods
class WinterCampActivityDetailInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("WinterCampActivityDetailInfo", [
            { no: 3, name: "explore_info", kind: "message", T: () => WinterCampStageInfo_1.WinterCampStageInfo },
            { no: 4, name: "Unk3300_KCGKNJFGCFC", kind: "scalar", jsonName: "Unk3300KCGKNJFGCFC", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "is_content_closed", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 5, name: "Unk3300_CMNIBPMOECO", kind: "scalar", jsonName: "Unk3300CMNIBPMOECO", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "Unk3300_FHNNJJDGLOO", kind: "scalar", jsonName: "Unk3300FHNNJJDGLOO", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "used_item_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ItemParam_1.ItemParam },
            { no: 9, name: "battle_info", kind: "message", T: () => WinterCampStageInfo_1.WinterCampStageInfo },
            { no: 13, name: "race_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => WinterCampRaceStageInfo_1.WinterCampRaceStageInfo }
        ]);
    }
    create(value) {
        const message = { unk3300KCGKNJFGCFC: [], isContentClosed: false, unk3300CMNIBPMOECO: [], unk3300FHNNJJDGLOO: [], usedItemList: [], raceInfoList: [] };
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
                case /* WinterCampStageInfo explore_info */ 3:
                    message.exploreInfo = WinterCampStageInfo_1.WinterCampStageInfo.internalBinaryRead(reader, reader.uint32(), options, message.exploreInfo);
                    break;
                case /* repeated uint32 Unk3300_KCGKNJFGCFC = 4 [json_name = "Unk3300KCGKNJFGCFC"];*/ 4:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unk3300KCGKNJFGCFC.push(reader.uint32());
                    else
                        message.unk3300KCGKNJFGCFC.push(reader.uint32());
                    break;
                case /* bool is_content_closed */ 12:
                    message.isContentClosed = reader.bool();
                    break;
                case /* repeated uint32 Unk3300_CMNIBPMOECO = 5 [json_name = "Unk3300CMNIBPMOECO"];*/ 5:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unk3300CMNIBPMOECO.push(reader.uint32());
                    else
                        message.unk3300CMNIBPMOECO.push(reader.uint32());
                    break;
                case /* repeated uint32 Unk3300_FHNNJJDGLOO = 6 [json_name = "Unk3300FHNNJJDGLOO"];*/ 6:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unk3300FHNNJJDGLOO.push(reader.uint32());
                    else
                        message.unk3300FHNNJJDGLOO.push(reader.uint32());
                    break;
                case /* repeated ItemParam used_item_list */ 14:
                    message.usedItemList.push(ItemParam_1.ItemParam.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* WinterCampStageInfo battle_info */ 9:
                    message.battleInfo = WinterCampStageInfo_1.WinterCampStageInfo.internalBinaryRead(reader, reader.uint32(), options, message.battleInfo);
                    break;
                case /* repeated WinterCampRaceStageInfo race_info_list */ 13:
                    message.raceInfoList.push(WinterCampRaceStageInfo_1.WinterCampRaceStageInfo.internalBinaryRead(reader, reader.uint32(), options));
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
        /* WinterCampStageInfo explore_info = 3; */
        if (message.exploreInfo)
            WinterCampStageInfo_1.WinterCampStageInfo.internalBinaryWrite(message.exploreInfo, writer.tag(3, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated uint32 Unk3300_KCGKNJFGCFC = 4 [json_name = "Unk3300KCGKNJFGCFC"]; */
        if (message.unk3300KCGKNJFGCFC.length) {
            writer.tag(4, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unk3300KCGKNJFGCFC.length; i++)
                writer.uint32(message.unk3300KCGKNJFGCFC[i]);
            writer.join();
        }
        /* bool is_content_closed = 12; */
        if (message.isContentClosed !== false)
            writer.tag(12, runtime_2.WireType.Varint).bool(message.isContentClosed);
        /* repeated uint32 Unk3300_CMNIBPMOECO = 5 [json_name = "Unk3300CMNIBPMOECO"]; */
        if (message.unk3300CMNIBPMOECO.length) {
            writer.tag(5, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unk3300CMNIBPMOECO.length; i++)
                writer.uint32(message.unk3300CMNIBPMOECO[i]);
            writer.join();
        }
        /* repeated uint32 Unk3300_FHNNJJDGLOO = 6 [json_name = "Unk3300FHNNJJDGLOO"]; */
        if (message.unk3300FHNNJJDGLOO.length) {
            writer.tag(6, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unk3300FHNNJJDGLOO.length; i++)
                writer.uint32(message.unk3300FHNNJJDGLOO[i]);
            writer.join();
        }
        /* repeated ItemParam used_item_list = 14; */
        for (let i = 0; i < message.usedItemList.length; i++)
            ItemParam_1.ItemParam.internalBinaryWrite(message.usedItemList[i], writer.tag(14, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* WinterCampStageInfo battle_info = 9; */
        if (message.battleInfo)
            WinterCampStageInfo_1.WinterCampStageInfo.internalBinaryWrite(message.battleInfo, writer.tag(9, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated WinterCampRaceStageInfo race_info_list = 13; */
        for (let i = 0; i < message.raceInfoList.length; i++)
            WinterCampRaceStageInfo_1.WinterCampRaceStageInfo.internalBinaryWrite(message.raceInfoList[i], writer.tag(13, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message WinterCampActivityDetailInfo
 */
exports.WinterCampActivityDetailInfo = new WinterCampActivityDetailInfo$Type();
