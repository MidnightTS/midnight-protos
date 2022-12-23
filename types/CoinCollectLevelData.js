"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoinCollectLevelData = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const CoinCollectTeamInfoData_1 = require("./CoinCollectTeamInfoData");
// @generated message type with reflection information, may provide speed optimized methods
class CoinCollectLevelData$Type extends runtime_5.MessageType {
    constructor() {
        super("CoinCollectLevelData", [
            { no: 6, name: "is_level_open", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 14, name: "Unk3300_GNFGEFHKHEF", kind: "scalar", jsonName: "Unk3300GNFGEFHKHEF", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "level_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "Unk3300_ONPKNIAHPHM", kind: "scalar", jsonName: "Unk3300ONPKNIAHPHM", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "Unk3300_GDKMJJNFIPP", kind: "scalar", jsonName: "Unk3300GDKMJJNFIPP", T: 8 /*ScalarType.BOOL*/ },
            { no: 8, name: "single_best_team_info", kind: "message", T: () => CoinCollectTeamInfoData_1.CoinCollectTeamInfoData },
            { no: 1, name: "Unk3300_HINHOCILNJC", kind: "scalar", jsonName: "Unk3300HINHOCILNJC", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "Unk3300_ALILGJBDOMD", kind: "scalar", jsonName: "Unk3300ALILGJBDOMD", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "Unk3300_OLNMJJHJAGK", kind: "scalar", jsonName: "Unk3300OLNMJJHJAGK", T: 8 /*ScalarType.BOOL*/ },
            { no: 11, name: "Unk3300_LOPHGLMNDCP", kind: "scalar", jsonName: "Unk3300LOPHGLMNDCP", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "double_best_team_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => CoinCollectTeamInfoData_1.CoinCollectTeamInfoData },
            { no: 9, name: "Unk3300_JDBOOHBJFCP", kind: "scalar", jsonName: "Unk3300JDBOOHBJFCP", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { isLevelOpen: false, unk3300GNFGEFHKHEF: 0, levelId: 0, unk3300ONPKNIAHPHM: 0, unk3300GDKMJJNFIPP: false, unk3300HINHOCILNJC: 0, unk3300ALILGJBDOMD: 0, unk3300OLNMJJHJAGK: false, unk3300LOPHGLMNDCP: 0, doubleBestTeamInfoList: [], unk3300JDBOOHBJFCP: false };
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
                case /* bool is_level_open */ 6:
                    message.isLevelOpen = reader.bool();
                    break;
                case /* uint32 Unk3300_GNFGEFHKHEF = 14 [json_name = "Unk3300GNFGEFHKHEF"];*/ 14:
                    message.unk3300GNFGEFHKHEF = reader.uint32();
                    break;
                case /* uint32 level_id */ 7:
                    message.levelId = reader.uint32();
                    break;
                case /* uint32 Unk3300_ONPKNIAHPHM = 4 [json_name = "Unk3300ONPKNIAHPHM"];*/ 4:
                    message.unk3300ONPKNIAHPHM = reader.uint32();
                    break;
                case /* bool Unk3300_GDKMJJNFIPP = 13 [json_name = "Unk3300GDKMJJNFIPP"];*/ 13:
                    message.unk3300GDKMJJNFIPP = reader.bool();
                    break;
                case /* CoinCollectTeamInfoData single_best_team_info */ 8:
                    message.singleBestTeamInfo = CoinCollectTeamInfoData_1.CoinCollectTeamInfoData.internalBinaryRead(reader, reader.uint32(), options, message.singleBestTeamInfo);
                    break;
                case /* uint32 Unk3300_HINHOCILNJC = 1 [json_name = "Unk3300HINHOCILNJC"];*/ 1:
                    message.unk3300HINHOCILNJC = reader.uint32();
                    break;
                case /* uint32 Unk3300_ALILGJBDOMD = 3 [json_name = "Unk3300ALILGJBDOMD"];*/ 3:
                    message.unk3300ALILGJBDOMD = reader.uint32();
                    break;
                case /* bool Unk3300_OLNMJJHJAGK = 10 [json_name = "Unk3300OLNMJJHJAGK"];*/ 10:
                    message.unk3300OLNMJJHJAGK = reader.bool();
                    break;
                case /* uint32 Unk3300_LOPHGLMNDCP = 11 [json_name = "Unk3300LOPHGLMNDCP"];*/ 11:
                    message.unk3300LOPHGLMNDCP = reader.uint32();
                    break;
                case /* repeated CoinCollectTeamInfoData double_best_team_info_list */ 2:
                    message.doubleBestTeamInfoList.push(CoinCollectTeamInfoData_1.CoinCollectTeamInfoData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* bool Unk3300_JDBOOHBJFCP = 9 [json_name = "Unk3300JDBOOHBJFCP"];*/ 9:
                    message.unk3300JDBOOHBJFCP = reader.bool();
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
        /* bool is_level_open = 6; */
        if (message.isLevelOpen !== false)
            writer.tag(6, runtime_1.WireType.Varint).bool(message.isLevelOpen);
        /* uint32 Unk3300_GNFGEFHKHEF = 14 [json_name = "Unk3300GNFGEFHKHEF"]; */
        if (message.unk3300GNFGEFHKHEF !== 0)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.unk3300GNFGEFHKHEF);
        /* uint32 level_id = 7; */
        if (message.levelId !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.levelId);
        /* uint32 Unk3300_ONPKNIAHPHM = 4 [json_name = "Unk3300ONPKNIAHPHM"]; */
        if (message.unk3300ONPKNIAHPHM !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.unk3300ONPKNIAHPHM);
        /* bool Unk3300_GDKMJJNFIPP = 13 [json_name = "Unk3300GDKMJJNFIPP"]; */
        if (message.unk3300GDKMJJNFIPP !== false)
            writer.tag(13, runtime_1.WireType.Varint).bool(message.unk3300GDKMJJNFIPP);
        /* CoinCollectTeamInfoData single_best_team_info = 8; */
        if (message.singleBestTeamInfo)
            CoinCollectTeamInfoData_1.CoinCollectTeamInfoData.internalBinaryWrite(message.singleBestTeamInfo, writer.tag(8, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 Unk3300_HINHOCILNJC = 1 [json_name = "Unk3300HINHOCILNJC"]; */
        if (message.unk3300HINHOCILNJC !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.unk3300HINHOCILNJC);
        /* uint32 Unk3300_ALILGJBDOMD = 3 [json_name = "Unk3300ALILGJBDOMD"]; */
        if (message.unk3300ALILGJBDOMD !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.unk3300ALILGJBDOMD);
        /* bool Unk3300_OLNMJJHJAGK = 10 [json_name = "Unk3300OLNMJJHJAGK"]; */
        if (message.unk3300OLNMJJHJAGK !== false)
            writer.tag(10, runtime_1.WireType.Varint).bool(message.unk3300OLNMJJHJAGK);
        /* uint32 Unk3300_LOPHGLMNDCP = 11 [json_name = "Unk3300LOPHGLMNDCP"]; */
        if (message.unk3300LOPHGLMNDCP !== 0)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.unk3300LOPHGLMNDCP);
        /* repeated CoinCollectTeamInfoData double_best_team_info_list = 2; */
        for (let i = 0; i < message.doubleBestTeamInfoList.length; i++)
            CoinCollectTeamInfoData_1.CoinCollectTeamInfoData.internalBinaryWrite(message.doubleBestTeamInfoList[i], writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* bool Unk3300_JDBOOHBJFCP = 9 [json_name = "Unk3300JDBOOHBJFCP"]; */
        if (message.unk3300JDBOOHBJFCP !== false)
            writer.tag(9, runtime_1.WireType.Varint).bool(message.unk3300JDBOOHBJFCP);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message CoinCollectLevelData
 */
exports.CoinCollectLevelData = new CoinCollectLevelData$Type();
