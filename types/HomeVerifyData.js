"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeVerifyData = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const LanguageType_1 = require("./LanguageType");
const HomeSceneArrangementMuipData_1 = require("./HomeSceneArrangementMuipData");
const HomeVerifySceneData_1 = require("./HomeVerifySceneData");
// @generated message type with reflection information, may provide speed optimized methods
class HomeVerifyData$Type extends runtime_5.MessageType {
    constructor() {
        super("HomeVerifyData", [
            { no: 4, name: "home_info", kind: "message", T: () => HomeVerifySceneData_1.HomeVerifySceneData },
            { no: 9, name: "arrangement_data", kind: "message", T: () => HomeSceneArrangementMuipData_1.HomeSceneArrangementMuipData },
            { no: 11, name: "timestamp", kind: "scalar", T: 7 /*ScalarType.FIXED32*/ },
            { no: 1, name: "token", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 10, name: "aid", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 6, name: "lang", kind: "enum", T: () => ["LanguageType", LanguageType_1.LanguageType, "LANGUAGE_TYPE_"] },
            { no: 2, name: "uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "region", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { timestamp: 0, token: "", aid: "", lang: 0, uid: 0, region: "" };
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
                case /* HomeVerifySceneData home_info */ 4:
                    message.homeInfo = HomeVerifySceneData_1.HomeVerifySceneData.internalBinaryRead(reader, reader.uint32(), options, message.homeInfo);
                    break;
                case /* HomeSceneArrangementMuipData arrangement_data */ 9:
                    message.arrangementData = HomeSceneArrangementMuipData_1.HomeSceneArrangementMuipData.internalBinaryRead(reader, reader.uint32(), options, message.arrangementData);
                    break;
                case /* fixed32 timestamp */ 11:
                    message.timestamp = reader.fixed32();
                    break;
                case /* string token */ 1:
                    message.token = reader.string();
                    break;
                case /* string aid */ 10:
                    message.aid = reader.string();
                    break;
                case /* LanguageType lang */ 6:
                    message.lang = reader.int32();
                    break;
                case /* uint32 uid */ 2:
                    message.uid = reader.uint32();
                    break;
                case /* string region */ 7:
                    message.region = reader.string();
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
        /* HomeVerifySceneData home_info = 4; */
        if (message.homeInfo)
            HomeVerifySceneData_1.HomeVerifySceneData.internalBinaryWrite(message.homeInfo, writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* HomeSceneArrangementMuipData arrangement_data = 9; */
        if (message.arrangementData)
            HomeSceneArrangementMuipData_1.HomeSceneArrangementMuipData.internalBinaryWrite(message.arrangementData, writer.tag(9, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* fixed32 timestamp = 11; */
        if (message.timestamp !== 0)
            writer.tag(11, runtime_1.WireType.Bit32).fixed32(message.timestamp);
        /* string token = 1; */
        if (message.token !== "")
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.token);
        /* string aid = 10; */
        if (message.aid !== "")
            writer.tag(10, runtime_1.WireType.LengthDelimited).string(message.aid);
        /* LanguageType lang = 6; */
        if (message.lang !== 0)
            writer.tag(6, runtime_1.WireType.Varint).int32(message.lang);
        /* uint32 uid = 2; */
        if (message.uid !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.uid);
        /* string region = 7; */
        if (message.region !== "")
            writer.tag(7, runtime_1.WireType.LengthDelimited).string(message.region);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message HomeVerifyData
 */
exports.HomeVerifyData = new HomeVerifyData$Type();
